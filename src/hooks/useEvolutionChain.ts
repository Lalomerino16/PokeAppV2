import { getEvolutionChainAction } from "@/actions/getEvolutionChainAction"
import { useQuery } from "@tanstack/react-query"





export const useEvolutionChain = (url: string | undefined) => {


    const query = useQuery({
        queryKey: ['evolution-chain', url],
        queryFn: () => getEvolutionChainAction(url!),
        enabled: !!url,
        staleTime: 1000 *  60 * 5, 
    })

    return query

}