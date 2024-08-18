export interface PokemonItem {
    name: string;
    urlInfo: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonItem[];
}

export class PokemonItemClass {
    name: string;
    urlInfo: string;

    constructor(name: string, urlInfo: string) {
        this.name = name;
        this.urlInfo = urlInfo;
    }
}