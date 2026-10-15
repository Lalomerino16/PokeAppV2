import { pokemonApi } from "@/api/pokemonApi";
import type { PokemonSpecies } from "@/interfaces/pokemon-species.interface";




export const getPokemonSpeciesAction = async(specie: string): Promise<PokemonSpecies> => {

    const { data } = await pokemonApi.get<PokemonSpecies>(`/pokemon-species/${specie}`);


    return data

}