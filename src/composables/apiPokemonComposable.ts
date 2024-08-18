import { ref } from 'vue';
import {PokemonItem} from "../models/pokemon/PokemonItem.ts";
import {Pokemon} from "../models/pokemon/Pokemon.ts";
import {PokemonEntity} from "../models/pokemon/PokemonEntity.ts";
import {pokemonStore} from "../stores/pokemonStore.ts";


// Composable para manejar la lógica de Pokémon
export function apiPokemonComposable() {
    const pkstore = ref(pokemonStore());
    const pokemonCount = ref(pkstore.value.pokemonCount);
    const pokemonList = ref<PokemonItem[]>([]);
    const pokemonDetailsList = ref<Pokemon[]>([]);
    const loadingListPokemonItem = ref<Boolean>(false);
    const loadingListPokemonDetails = ref<Boolean>(false);
    const error = ref<string | null>(null);

    // Obtener la lista de Pokémon minimalista
    const fetchPokemonItemList = async (limit: number = 25, offset: number = 0) => {
        loadingListPokemonItem.value = true;
        error.value = null;
        pokemonList.value = await PokemonEntity.fetchPokemonItemList(limit, offset);
        console.log("Pokemons lista simple cargada " , pokemonList.value);
    };

    const fetchPokemonMoreInformation = async (pokemonId: string) => {
        error.value = null;
        return await PokemonEntity.fetchPokemonMoreInformation(pokemonId);
    };

    const fetchPokemonInformation = async (pokemonName:string) => {
        error.value = null;
        const response = await PokemonEntity.fetchPokemonInformation(pokemonName);
        return response ? response : null;
    };

    const getAllInfoPokemonArray = async () => {
        loadingListPokemonDetails.value = true;
        for (const pokemonItem of pokemonList.value) {
            let pokemonInfo: Pokemon = await fetchPokemonInformation(pokemonItem.name);
            pokemonDetailsList.value.push(pokemonInfo);
            console.log(pokemonInfo)
        }
    };

    const addPokemonToStore = (pokemon: Pokemon) => {
        pkstore.value.addPokemon(pokemon);
    };

    const removePokemonFromStore = (index: number) => {
        pkstore.value.removePokemon(index);
    };

    const clearSelection = () => {
        pkstore.value.clearPokemonList();
    };

    return {
        pokemonList,
        pokemonDetailsList,
        loadingListPokemonDetails,
        loadingListPokemonItem,
        error,
        pkstore,
        pokemonCount,
        addPokemonToStore,
        removePokemonFromStore,
        clearSelection,
        fetchPokemonItemList,
        fetchPokemonInformation,
        getAllInfoPokemonArray,
        fetchPokemonMoreInformation
    };
}
