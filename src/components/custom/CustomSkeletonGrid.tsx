import { PokemonCardSkeleton } from "./CustomPokemonCardSkeleton"

interface CustomSkeletonGridProps{
    count?: number;
}


export const CustomSkeletonGrid = ({ count = 20 }: CustomSkeletonGridProps) => {


    return(
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {Array.from({ length: count }).map((_, i) => (
                <PokemonCardSkeleton key={i} />
            ))}
        </section>
    )
}