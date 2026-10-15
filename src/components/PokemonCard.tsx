import type { Pokemon } from "@/interfaces/pokemon.interface"
import {
    TYPE_BORDER_COLORS,
    TYPE_GRADIENT_COLORS,
    DEFAULT_BORDER_COLOR,
    DEFAULT_GRADIENT_COLOR,
} from "@/helpers/pokemonTypes"

import { Link } from "react-router"

interface PokemonCardProps {
    pokemon: Pokemon
}

const STAT_LABELS: Record<string, string> = {
    hp: "HP",

    attack: "Attack",
    defense: "Defense",
    speed: "Speed",
    "special-attack": "Special Attack",
    "special-defense": "Special Defense",
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const mainType = pokemon.types[0].type.name

    const borderColor = TYPE_BORDER_COLORS[mainType] ?? DEFAULT_BORDER_COLOR
    const gradientColor = TYPE_GRADIENT_COLORS[mainType] ?? DEFAULT_GRADIENT_COLOR

    const image = pokemon.sprites.other["official-artwork"].front_default
    const types = pokemon.types.map((t) => t.type.name).join(" / ")

    return (
        <article
            className={`w-full min-h-[520px] border-8 ${borderColor} rounded-lg text-center flex flex-col overflow-hidden`}
        >
            <header className="flex flex-col">
                {/* Imagen sobre el degradado */}
                <div
                    className={`h-48 bg-gradient-to-b ${gradientColor} flex items-center justify-center`}
                >
                    {image && (
                        <img
                            src={image}
                            alt={pokemon.name}
                            className="h-40 drop-shadow-lg"
                            loading="lazy"
                        />
                    )}
                </div>

                {/* Nombre y tipos */}
                <div className="py-3">
                    <strong className="block capitalize">{pokemon.name}</strong>
                    <p className="capitalize text-sm">{types}</p>
                </div>
            </header>

            {/* Stats */}
            <div className="py-4 flex-1">
                <ul className="grid grid-cols-2 gap-2">
                    {pokemon.stats.map(({ base_stat, stat }) => (
                        <li key={stat.name}>
                            <p className="text-sm">{STAT_LABELS[stat.name] ?? stat.name}</p>
                            <strong>{base_stat}</strong>
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="flex items-center justify-center py-2">
                
                <Link to={`/pokemon/${pokemon.name}`}
                    onMouseEnter={() => import("@/pages/PokemonPage")}
                    onFocus={() => import("@/pages/PokemonPage")}
                    className="hover:underline"
                >
                    Ver más
                </Link>
            </footer>
        </article>
    )
}