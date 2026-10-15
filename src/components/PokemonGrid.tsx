import type { Pokemon } from "@/interfaces/pokemon.interface";
import { PokemonCard } from "./PokemonCard"


interface PokemonGridProps{
    pokemons: Pokemon[];
}


export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
    

    


    return (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {
                pokemons.map((pokemon) => (
                    <PokemonCard 
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))
            }

           
        </section>
    )
    
}


