import { pokemonApi } from "@/api/pokemonApi"
import type { PokemonResponse } from "@/interfaces/pokemonResponse";


interface Options{
    limit?: number;
    offset?: number;
}


export const getPokemonListAction = async ({
    limit = 20,
    offset = 0,
}: Options = {}): Promise<PokemonResponse> => {


    const { data } = await pokemonApi.get<PokemonResponse>("/pokemon", {
        params: { limit, offset },
    })

    
    return data
}