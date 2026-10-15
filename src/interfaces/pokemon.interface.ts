

interface NamedResource {
  name: string;
  url: string;
}

export interface Pokemon {
    id: number;
    name: string;
    height: number; // decímetros
    weight: number; // hectogramos
    base_experience: number;
    species: { name: string; url: string },
    cries: { latest: string },
    types: {
        slot: number;
        type: NamedResource;
    }[];
    stats: {
        base_stat: number;
        effort: number;
        stat: NamedResource;
    }[];
    abilities: {
        ability: NamedResource;
        is_hidden: boolean;
        slot: number;
    }[];
    sprites: {
        front_default: string | null;
        other: {
        'official-artwork': {
            front_default: string | null;
            front_shiny: string | null;
        };
        };
    };
}

