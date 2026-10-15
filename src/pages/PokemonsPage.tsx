
import { CustomJumbotrom } from "@/components/custom/CustomJumbotrom"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { PokemonGrid } from "@/components/PokemonGrid"

import { usePokemons } from "@/hooks/usePokemons"
import { CustomSkeletonGrid } from "@/components/custom/CustomSkeletonGrid"
import { CustomError } from "@/components/custom/CustomError"
import { ControlsFilters } from "@/components/ControlsFilters"
import { PokemonNotFoundPage } from "./PokemonNotFoundPage"



export const PokemonsPage = () => {
    
    const { data, isPending, error } = usePokemons();

    return (
        <section>
            
            {error ? 
                (
                    <CustomError messageError={error.message} />
                ) : isPending ? (
                    <CustomSkeletonGrid count={20} />
                ) : data.pokemons.length === 0 ? (
                    <PokemonNotFoundPage />
                ) : (
                    <>  
                        <div className="flex flex-col items-center gap-10 mb-20">
                            <CustomJumbotrom />
                            <ControlsFilters /> 
                        </div>
                        <div className="flex flex-col gap-14 mb-8">
                            <PokemonGrid  pokemons={data.pokemons  || [] } />
                            <CustomPagination totalPages={data.totalPages}/>
                        </div>
                    </>

                )
            }
        
        </section>
    )   
}