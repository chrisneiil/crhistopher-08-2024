import { defineStore } from 'pinia';
import { Pokemon } from '../models/pokemon/Pokemon';

export const pokemonStore = defineStore('pokemonStore', {
    state: () => ({
        pokemonsSelectedList: JSON.parse(localStorage.getItem('pokemonsSelectedList') || '[]') as Pokemon[],  // Cargar estado inicial desde localStorage
        singlePokemonSelect: {} as Pokemon,
    }),

    // Getters
    getters: {
        getSinglePokemonSelect: (state) => state.singlePokemonSelect,
        getPokemonsSelectedList: (state) => state.pokemonsSelectedList,  // Obtener la lista de Pokémon seleccionados
        pokemonCount: (state) => state.pokemonsSelectedList.length,  // Obtener la cantidad de Pokémon seleccionados
    },

    // Actions (Setters)
    actions: {
        setSinglePokemonSelect(pokemon: Pokemon){
            this.singlePokemonSelect = pokemon;
        },
        setPokemonsSelectedList(pokemons: Pokemon[]) {
            this.pokemonsSelectedList = pokemons;
            this.saveToLocalStorage();  // Guardar en localStorage
        },
        addPokemon(pokemon: Pokemon) {
            if (this.pokemonsSelectedList.length < 6) {
                this.pokemonsSelectedList.push(pokemon);
                this.saveToLocalStorage();  // Guardar en localStorage
            }
        },
        removePokemon(index: number) {
            this.pokemonsSelectedList.splice(index, 1);
            this.saveToLocalStorage();  // Guardar en localStorage
        },
        clearPokemonList() {
            this.pokemonsSelectedList = [];  // Limpiar la lista de Pokémon seleccionados
            this.saveToLocalStorage();  // Guardar en localStorage
        },
        saveToLocalStorage() {
            localStorage.setItem('pokemonsSelectedList', JSON.stringify(this.pokemonsSelectedList));
        }
    },
});
