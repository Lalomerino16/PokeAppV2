import { pokemonApi } from './../api/pokemonApi';
import type { Pokemon } from "@/interfaces/pokemon.interface";




export const getPokemonByNameAction = async(pokemonName: string): Promise<Pokemon> => {


    const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${pokemonName}`)

    return data;


}