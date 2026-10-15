
export interface PokemonSpecies {
    flavor_text_entries: { flavor_text: string; language: { name: string } }[]
    genera: { genus: string; language: { name: string } }[]
    evolution_chain: { url: string }
}


export interface ChainLink {
    species: { name: string; url: string }
    evolves_to: ChainLink[]
}

export interface EvolutionChain {
    chain: ChainLink
}