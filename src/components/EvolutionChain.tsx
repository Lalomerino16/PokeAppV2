import { Link } from "react-router"
import { getIdFromUrl, getPokemonImage } from "@/helpers/pokemon"
import type {
    ChainLink,
    EvolutionChain as EvolutionChainData,
} from "@/interfaces/pokemon-species.interface"

interface Props {
    chain: EvolutionChainData
    currentName: string
}

// Aplana el árbol de evoluciones (incluye ramificaciones como Eevee)
const flatten = (link: ChainLink): { name: string; id: number }[] => [
    { name: link.species.name, id: getIdFromUrl(link.species.url) },
    ...link.evolves_to.flatMap(flatten),
]

export const EvolutionChain = ({ chain, currentName }: Props) => {
    const evolutions = flatten(chain.chain)

    if (evolutions.length <= 1) {
        return (
            <p className="mt-3 text-sm text-muted-foreground">
                Este Pokémon no evoluciona.
            </p>
        )
    }

    return (
        <ul className="mt-3 flex flex-wrap items-center gap-4">
            {evolutions.map(({ name, id }) => (
                <li key={name}>
                    <Link
                        to={`/pokemon/${name}`}
                        className={`flex flex-col items-center rounded-xl p-2 transition-colors hover:bg-muted ${
                            name === currentName ? "bg-muted" : ""
                        }`}
                    >
                        <img
                            src={getPokemonImage(id)}
                            alt={name}
                            className="h-20 w-20 object-contain"
                            loading="lazy"
                        />
                        <span className="text-sm font-medium capitalize">{name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}