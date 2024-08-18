import pokeApiAxiosInstance from "../../utils/axios.ts";
import { PokemonListResponse} from "./PokemonItem.ts";
import {Pokemon} from "./Pokemon.ts";
import {PokemonSpecies} from "./PokemonSpecies.ts";

// Obtener info completa de un pokemon
export async function fetchPokemonInformation(pokemonName: string): Promise<any> {
    try {
        return (await pokeApiAxiosInstance.get<Pokemon>(`pokemon/${pokemonName}`)).data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return null;
    }
}

// Obtener la lista de Pokemon minimalista
export async function fetchPokemonItemList(limit:number = 151, offSet:number = 0): Promise<any> {
    try {
        return (await pokeApiAxiosInstance.get<PokemonListResponse>(`pokemon?limit=${limit}?&offset=${offSet}`)).data.results;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return [];
    }
}

// Obtener info completa de un pokemon
export async function fetchPokemonMoreInformation(pokemonId:string): Promise<any> {
    try {
        return (await pokeApiAxiosInstance.get<PokemonSpecies>(`pokemon-species/${pokemonId}`)).data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return null;
    }
}

// Obtener info completa de un pokemon
export async function fetchPokemonEvolutionChain(pokemonId:number): Promise<any> {
    try {
        return (await pokeApiAxiosInstance.get<PokemonSpecies>(`evolution-chain/${pokemonId}`)).data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return null;
    }
}