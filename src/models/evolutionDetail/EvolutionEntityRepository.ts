
import {EvolutionChain} from "./EvolutionDetails.ts";
import pokeApiAxiosInstance from "../../utils/axios.ts";

export async function fetchPokemonEvolutionChain(idPokemon: string): Promise<any> {
    try {
        return (await pokeApiAxiosInstance.get<EvolutionChain>(`evolution-chain/${idPokemon}`)).data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return null;
    }
}
