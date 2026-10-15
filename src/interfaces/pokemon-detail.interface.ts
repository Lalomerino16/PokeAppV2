import type { EvolutionChain } from "./EvolutionChain.interface";
import type { PokemonSpecies } from "./pokemon-species.interface";
import type { Pokemon } from "./pokemon.interface";


export interface PokemonDetail {
    pokemon: Pokemon;
    species: PokemonSpecies
    evolutionChain: EvolutionChain;
}