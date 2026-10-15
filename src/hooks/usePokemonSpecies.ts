import { getPokemonSpeciesAction } from "@/actions/getPokemonSpeciesAction"
import { useQuery } from "@tanstack/react-query"





export const usePokemonSpecies = (speciesName: string) => {


    const query = useQuery({
        queryKey: ['pokemon-species', speciesName],
        queryFn: () => getPokemonSpeciesAction(speciesName),
        staleTime: 1000 *  60 * 5, 
        enabled: !!speciesName,
    })

    return query

}