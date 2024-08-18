// Representa el enlace a un recurso de la API
interface NamedAPIResource {
    name: string;
    url: string;
}

// Detalles de la evolución de un Pokémon
interface EvolutionDetails {
    gender: number | null;
    held_item: NamedAPIResource | null;
    item: NamedAPIResource | null;
    known_move: NamedAPIResource | null;
    known_move_type: NamedAPIResource | null;
    location: NamedAPIResource | null;
    min_affection: number | null;
    min_beauty: number | null;
    min_happiness: number | null;
    min_level: number | null;
    needs_overworld_rain: boolean;
    party_species: NamedAPIResource | null;
    party_type: NamedAPIResource | null;
    relative_physical_stats: number | null;
    time_of_day: string;
    trade_species: NamedAPIResource | null;
    trigger: NamedAPIResource;
    turn_upside_down: boolean;
}

// Representa una especie y sus evoluciones
export interface ChainLink {
    evolution_details: EvolutionDetails[];
    evolves_to: ChainLink[];
    is_baby: boolean;
    species: NamedAPIResource;
}

// Representa la cadena de evolución de un Pokémon
export interface EvolutionChain {
    baby_trigger_item: NamedAPIResource | null;
    chain: ChainLink;
    id: number;
}

// Objeto de ejemplo usando las interfaces
export const evolutionChainExample: EvolutionChain = {
    baby_trigger_item: null,
    chain: {
        evolution_details: [],
        evolves_to: [
            {
                evolution_details: [
                    {
                        gender: null,
                        held_item: null,
                        item: null,
                        known_move: null,
                        known_move_type: null,
                        location: null,
                        min_affection: null,
                        min_beauty: null,
                        min_happiness: null,
                        min_level: 16,
                        needs_overworld_rain: false,
                        party_species: null,
                        party_type: null,
                        relative_physical_stats: null,
                        time_of_day: "",
                        trade_species: null,
                        trigger: {
                            name: "level-up",
                            url: "https://pokeapi.co/api/v2/evolution-trigger/1/"
                        },
                        turn_upside_down: false
                    }
                ],
                evolves_to: [
                    {
                        evolution_details: [
                            {
                                gender: null,
                                held_item: null,
                                item: null,
                                known_move: null,
                                known_move_type: null,
                                location: null,
                                min_affection: null,
                                min_beauty: null,
                                min_happiness: null,
                                min_level: 32,
                                needs_overworld_rain: false,
                                party_species: null,
                                party_type: null,
                                relative_physical_stats: null,
                                time_of_day: "",
                                trade_species: null,
                                trigger: {
                                    name: "level-up",
                                    url: "https://pokeapi.co/api/v2/evolution-trigger/1/"
                                },
                                turn_upside_down: false
                            }
                        ],
                        evolves_to: [],
                        is_baby: false,
                        species: {
                            name: "venusaur",
                            url: "https://pokeapi.co/api/v2/pokemon-species/3/"
                        }
                    }
                ],
                is_baby: false,
                species: {
                    name: "ivysaur",
                    url: "https://pokeapi.co/api/v2/pokemon-species/2/"
                }
            }
        ],
        is_baby: false,
        species: {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        }
    },
    id: 1
};
