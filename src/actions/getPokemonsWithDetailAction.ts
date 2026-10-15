import type { Pokemon } from "@/interfaces/pokemon.interface";

import { getPokemonListAction } from "./getPokemonListAction";
import { getPokemonByNameAction } from "./getPokemonByNameAction";



interface Options{
    limit?: number;
    offset?: number;
}


interface PokemonsWithDetail {
    pokemons: Pokemon[];
    total: number;
}

export const getPokemonsWithDetailAction = async(options: Options = {}): Promise<PokemonsWithDetail> => {

    const { results, count } = await getPokemonListAction(options);

    const pokemons = await Promise.all(
        results.map(({ name }) => getPokemonByNameAction(name))
    )

    return {
        pokemons,
        total: count
    }
}