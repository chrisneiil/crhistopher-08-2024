interface NamedResource {
    name: string;
    url: string;
}

interface FlavorTextEntry {
    flavor_text: string;
    language: NamedResource;
    version: NamedResource;
}

interface EggGroup {
    name: string;
    url: string;
}

interface PalParkEncounter {
    area: NamedResource;
    base_score: number;
    rate: number;
}

interface PokedexEntry {
    entry_number: number;
    pokedex: NamedResource;
}

interface PokemonVariety {
    is_default: boolean;
    pokemon: NamedResource;
}

export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: NamedResource;
    egg_groups: EggGroup[];
    evolution_chain: NamedResource;
    evolves_from_species: NamedResource | null;
    flavor_text_entries: FlavorTextEntry[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: {
        genus: string;
        language: NamedResource;
    }[];
    generation: NamedResource;
    growth_rate: NamedResource;
    habitat: NamedResource;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: {
        language: NamedResource;
        name: string;
    }[];
    order: number;
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexEntry[];
    shape: NamedResource;
    varieties: PokemonVariety[];
}

// Ejemplo de objeto de tipo PokemonSpecies
export const bulbasaurSpecies: PokemonSpecies = {
    base_happiness: 50,
    capture_rate: 45,
    color: {
        name: "green",
        url: "https://pokeapi.co/api/v2/pokemon-color/5/",
    },
    egg_groups: [
        {
            name: "monster",
            url: "https://pokeapi.co/api/v2/egg-group/1/",
        },
        {
            name: "plant",
            url: "https://pokeapi.co/api/v2/egg-group/7/",
        },
    ],
    evolution_chain: {
        name : "example",
        url: "https://pokeapi.co/api/v2/evolution-chain/1/",
    },
    evolves_from_species: null,
    flavor_text_entries: [
        {
            flavor_text:
                "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
            language: {
                name: "en",
                url: "https://pokeapi.co/api/v2/language/9/",
            },
            version: {
                name: "red",
                url: "https://pokeapi.co/api/v2/version/1/",
            },
        },
        // Agrega más entradas de flavor text según sea necesario
    ],
    forms_switchable: false,
    gender_rate: 1,
    genera: [
        {
            genus: "たねポケモン",
            language: {
                name: "ja-Hrkt",
                url: "https://pokeapi.co/api/v2/language/1/",
            },
        },
    ],
    generation: {
        name: "generation-i",
        url: "https://pokeapi.co/api/v2/generation/1/",
    },
    growth_rate: {
        name: "medium-slow",
        url: "https://pokeapi.co/api/v2/growth-rate/4/",
    },
    habitat: {
        name: "grassland",
        url: "https://pokeapi.co/api/v2/pokemon-habitat/3/",
    },
    has_gender_differences: false,
    hatch_counter: 20,
    id: 1,
    is_baby: false,
    is_legendary: false,
    is_mythical: false,
    name: "bulbasaur",
    names: [
        {
            language: {
                name: "ja-Hrkt",
                url: "https://pokeapi.co/api/v2/language/1/",
            },
            name: "フシギダネ",
        },
        // Agrega más nombres según sea necesario
    ],
    order: 1,
    pal_park_encounters: [
        {
            area: {
                name: "field",
                url: "https://pokeapi.co/api/v2/pal-park-area/2/",
            },
            base_score: 50,
            rate: 30,
        },
    ],
    pokedex_numbers: [
        {
            entry_number: 1,
            pokedex: {
                name: "national",
                url: "https://pokeapi.co/api/v2/pokedex/1/",
            },
        },
    ],
    shape: {
        name: "quadruped",
        url: "https://pokeapi.co/api/v2/pokemon-shape/8/",
    },
    varieties: [
        {
            is_default: true,
            pokemon: {
                name: "bulbasaur",
                url: "https://pokeapi.co/api/v2/pokemon/1/",
            },
        },
    ],
};
