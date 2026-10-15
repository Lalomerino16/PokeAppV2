import { pokemonApi } from "@/api/pokemonApi";
import type { EvolutionChain } from "@/interfaces/EvolutionChain.interface";




export const getEvolutionChainAction = async(url: string): Promise<EvolutionChain> => {

    const { data } = await pokemonApi.get<EvolutionChain>(url)

    return data

} 