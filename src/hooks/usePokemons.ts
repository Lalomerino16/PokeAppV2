import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { getPokemonsByTypeAction } from "@/actions/getPokemonsByTypeAction"
import { getPokemonsWithDetailAction } from "@/actions/getPokemonsWithDetailAction"
import { getPokemonListAction } from "@/actions/getPokemonListAction"
import { getPokemonByNameAction } from "@/actions/getPokemonByNameAction"
import type { Pokemon } from "@/interfaces/pokemon.interface"

export const PAGE_SIZE = 20;


interface PokemonListItem {
    name: string
    url: string
}



export const usePokemons = () => {
    const [searchParams] = useSearchParams()
    const queryClient = useQueryClient()

    const term = (searchParams.get("q") ?? "").trim().toLowerCase().replace(/\s+/g, "-")
    const type = searchParams.get('type') ?? '';
    const page = Math.max(Number(searchParams.get("page")) || 1, 1)
    const offset = (page - 1) * PAGE_SIZE



    return useQuery({
        queryKey: ["pokemons", { search: term, page, type }],
        queryFn: async () => {
            let pokemons: Pokemon[]
            let total: number

            if (!term && !type) {
                ;({ pokemons, total } = await getPokemonsWithDetailAction({
                    limit: PAGE_SIZE,
                    offset,
                }))
            } else {
                // Lista base: por tipo, o el índice completo
                const base: PokemonListItem[] = type
                    ? await queryClient.ensureQueryData({
                        queryKey: ["pokemon-type", type],
                        queryFn: () => getPokemonsByTypeAction(type),
                        staleTime: Infinity,
                    })
                    : (
                        await queryClient.ensureQueryData({
                            queryKey: ["pokemon-index"],
                            queryFn: () => getPokemonListAction({ limit: 100000 }),
                            staleTime: Infinity,
                        })
                    ).results

                const matches = term ? base.filter((p) => p.name.includes(term)) : base
                total = matches.length

                pokemons = await Promise.all(
                    matches.slice(offset, offset + PAGE_SIZE).map(({ name }) =>
                        queryClient.ensureQueryData({
                            queryKey: ["pokemon", name],
                            queryFn: () => getPokemonByNameAction(name),
                            staleTime: Infinity,
                        })
                    )
                )
            }

            pokemons.forEach((pokemon) => {
                queryClient.setQueryData<Pokemon>(["pokemon", pokemon.name], pokemon)
            })

            return {
                pokemons,
                total,
                totalPages: Math.max(Math.ceil(total / PAGE_SIZE), 1),
            }
        },
        staleTime: 1000 * 60 * 5,
        placeholderData: keepPreviousData,
    })
}