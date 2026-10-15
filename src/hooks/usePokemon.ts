import { getEvolutionChainAction } from '@/actions/getEvolutionChainAction';
import { getPokemonByNameAction } from '@/actions/getPokemonByNameAction';
import { getPokemonSpeciesAction } from '@/actions/getPokemonSpeciesAction';
import type { PokemonDetail } from '@/interfaces/pokemon-detail.interface';
import { useQuery, useQueryClient } from '@tanstack/react-query';






export const usePokemon = (pokemonName: string) => {

    const queryClient = useQueryClient()

    const query = useQuery<PokemonDetail>({
        queryKey: ['pokemon-detail', pokemonName],
        queryFn: async() => {


            const pokemon = await queryClient.ensureQueryData({
                queryKey: ['pokemon', pokemonName],
                queryFn: () => getPokemonByNameAction(pokemonName),
                staleTime: Infinity,
            })

            const species = await getPokemonSpeciesAction(pokemon.species.name);

            const evolutionChain = await getEvolutionChainAction(species.evolution_chain.url)

            
           

            return { pokemon, species, evolutionChain }

        },
        enabled: !!pokemonName,
        staleTime: Infinity,
             
    })

    return query;
}