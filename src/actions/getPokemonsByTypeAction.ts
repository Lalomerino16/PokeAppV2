import { pokemonApi } from "@/api/pokemonApi"

interface TypeResponse {
    pokemon: { pokemon: { name: string; url: string } }[]
}

export const getPokemonsByTypeAction = async (
    type: string
): Promise<{ name: string; url: string }[]> => {
    const { data } = await pokemonApi.get<TypeResponse>(`/type/${type}`)
    return data.pokemon.map((p) => p.pokemon)   
}