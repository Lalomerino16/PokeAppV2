
import { usePokemon } from "@/hooks/usePokemon";
import { Link, useParams } from "react-router"

import { CustomError } from "@/components/custom/CustomError";
import { CustomPokemonPageSkeleton } from "@/components/custom/CustomPokemonPageSkeleton";
import { PokemonDetailContent } from "@/components/PokemonDetailContent";


const BackLink = () => (
    <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
        ← Volver a la Pokédex
    </Link>
)


export const PokemonPage = () => {

    const { pokemonName = '' } = useParams<string>();
    const { data, isPending, error } = usePokemon(pokemonName);

    return (
        <section className="min-h-screen">
            <div className="mx-auto max-w-4xl px-4 py-8">
                <BackLink />

                {error ? (
                    <CustomError messageError={error.message} />
                ) : isPending ? (
                    <CustomPokemonPageSkeleton />
                ) : 
                    <PokemonDetailContent detail={data}/>
                }

            </div>
            
        </section>
    )
}