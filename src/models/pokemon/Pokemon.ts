
export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}

export interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
}

export interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: {
        version: NamedAPIResource;
        rarity: number;
    }[];
}

export interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: {
        level_learned_at: number;
        version_group: NamedAPIResource;
        move_learn_method: NamedAPIResource;
    }[];
}

export interface PokemonTypePast {
    generation: NamedAPIResource;
    types: PokemonType[];
}

export interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female?: string;
    front_shiny_female?: string;
    back_default: string;
    back_shiny: string;
    back_female?: string;
    back_shiny_female?: string;
}

export interface PokemonCries {
    latest: string;
    legacy: string;
}

export interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}

export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string; // URL para obtener más detalles sobre los encuentros
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    sprites: PokemonSprites;
    cries?: PokemonCries; // Esto puede ser opcional si no siempre está disponible en la API
    species: NamedAPIResource; // Especie del Pokémon
    stats: PokemonStat[];
    types: PokemonType[];
}



export const examplePokemonError: Pokemon = {
    id: 1,
    name: "Error pokemon",
    base_experience: 64,
    height: 7,
    is_default: true,
    order: 1,
    weight: 69,
    abilities: [
        {
            is_hidden: false,
            slot: 1,
            ability: {
                name: "overgrow",
                url: "https://pokeapi.co/api/v2/ability/65/"
            }
        },
        {
            is_hidden: true,
            slot: 3,
            ability: {
                name: "chlorophyll",
                url: "https://pokeapi.co/api/v2/ability/34/"
            }
        }
    ],
    forms: [
        {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
    ],
    game_indices: [
        {
            game_index: 1,
            version: {
                name: "red",
                url: "https://pokeapi.co/api/v2/version/1/"
            }
        }
    ],
    held_items: [],
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
    moves: [
        {
            move: {
                name: "tackle",
                url: "https://pokeapi.co/api/v2/move/33/"
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    version_group: {
                        name: "red-blue",
                        url: "https://pokeapi.co/api/v2/version-group/1/"
                    },
                    move_learn_method: {
                        name: "level-up",
                        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
                    }
                }
            ]
        }
    ],
    past_types: [],
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png"
    },
    cries: {
        latest: "https://example.com/cries/bulbasaur-default.mp3",
        legacy: "https://example.com/cries/bulbasaur-shiny.mp3"
    },
    species: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    stats: [
        {
            stat: {
                name: "hp",
                url: "https://pokeapi.co/api/v2/stat/1/"
            },
            effort: 0,
            base_stat: 45
        },
        {
            stat: {
                name: "attack",
                url: "https://pokeapi.co/api/v2/stat/2/"
            },
            effort: 0,
            base_stat: 49
        }
    ],
    types: [
        {
            slot: 1,
            type: {
                name: "grass",
                url: "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            slot: 2,
            type: {
                name: "poison",
                url: "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ]
};
