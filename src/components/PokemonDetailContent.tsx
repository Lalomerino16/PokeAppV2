import { useState } from "react"

import type { PokemonDetail } from "@/interfaces/pokemon-detail.interface"
import { EvolutionChain } from "./EvolutionChain"

import {
    TYPE_BG_COLORS,
    TYPE_GRADIENT_COLORS,
    DEFAULT_BG_COLOR,
    DEFAULT_GRADIENT_COLOR,
} from "@/helpers/pokemonTypes"
import { MAX_STAT, STAT_LABELS } from "@/helpers/pokemonStats"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Props {
    detail: PokemonDetail
}

export const PokemonDetailContent = ({ detail }: Props) => {

    const { pokemon, species, evolutionChain } = detail
    const [isShiny, setIsShiny] = useState(false)

    const mainType = pokemon.types[0].type.name
    const gradient = TYPE_GRADIENT_COLORS[mainType] ?? DEFAULT_GRADIENT_COLOR
    const barColor = TYPE_BG_COLORS[mainType] ?? DEFAULT_BG_COLOR

    const artwork = pokemon.sprites.other["official-artwork"]
    const image = isShiny ? artwork.front_shiny : artwork.front_default
    const paddedId = String(pokemon.id).padStart(3, "0")

    const description = (
        species.flavor_text_entries.find((e) => e.language.name === "es") ??
        species.flavor_text_entries.find((e) => e.language.name === "en")
    )?.flavor_text.replace(/[\n\f]/g, " ")

    const genus = (
        species.genera.find((g) => g.language.name === "es") ??
        species.genera.find((g) => g.language.name === "en")
    )?.genus

    const totalStats = pokemon.stats.reduce((sum, s) => sum + s.base_stat, 0)


    const quickFacts = [
        { label: "Altura", value: `${(pokemon.height / 10).toFixed(1)} m`, icon: "📏" },
        { label: "Peso", value: `${(pokemon.weight / 10).toFixed(1)} kg`, icon: "⚖️" },
        { label: "Exp. base", value: pokemon.base_experience, icon: "⭐" },
    ]

    return (
        <div className="mt-6 flex flex-col gap-6">
            
            <section
                className={`animate-card-in relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-6 text-white shadow-lg md:p-10`}
            >
                
                <div className="absolute inset-0 bg-black/10" />

               
                <span className="pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] font-black leading-none text-white/20 md:text-[12rem]">
                    #{paddedId}
                </span>

                <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    {/* Texto */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        {genus && (
                            <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                                {genus}
                            </p>
                        )}
                        <h1 className="text-4xl font-extrabold capitalize tracking-tight drop-shadow md:text-6xl">
                            {pokemon.name}
                        </h1>

                        <div className="mt-4 flex gap-2">
                            {pokemon.types.map(({ type }) => (
                                <Badge
                                    key={type.name}
                                    className="rounded-full border border-white/40 bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur"
                                >
                                    {type.name}
                                </Badge>
                            ))}
                        </div>

                        {description && (
                            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90">
                                {description}
                            </p>
                        )}

                        <div className="mt-5 flex gap-2">
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => setIsShiny((s) => !s)}
                            >
                                {isShiny ? "Ver normal" : "Ver shiny ✨"}
                            </Button>

                        </div>
                    </div>

                    {/* Imagen */}
                    {image && (
                        <img
                            src={image}
                            alt={pokemon.name}
                            className="animate-float h-64 w-64 shrink-0 object-contain drop-shadow-2xl md:h-80 md:w-80"
                        />
                    )}
                </div>
            </section>

            {/* MOSAICOS DE DATOS */}
            <div className="grid grid-cols-3 gap-4">
                {quickFacts.map(({ label, value, icon }, i) => (
                    <div
                        key={label}
                        className="animate-card-in flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
                        style={{ animationDelay: `${(i + 1) * 60}ms` }}
                    >
                        <span className="text-2xl">{icon}</span>
                        <span className="mt-1 text-lg font-bold text-foreground md:text-xl">
                            {value}
                        </span>
                        <span className="text-xs text-muted-foreground">{label}</span>
                    </div>
                ))}
            </div>

            {/* STATS + HABILIDADES */}
            <div className="grid gap-6 md:grid-cols-3">
                <section
                    className="animate-card-in rounded-2xl border border-border bg-card p-6 shadow-sm md:col-span-2"
                    style={{ animationDelay: "240ms" }}
                >
                    <div className="flex items-baseline justify-between">
                        <h2 className="text-lg font-bold text-card-foreground">Estadísticas</h2>
                        <span className="text-sm text-muted-foreground">
                            Total <strong className="text-foreground">{totalStats}</strong>
                        </span>
                    </div>

                    <ul className="mt-4 flex flex-col gap-3">
                        {pokemon.stats.map(({ base_stat, stat }) => (
                            <li key={stat.name} className="flex items-center gap-3">
                                <span className="w-24 shrink-0 text-sm font-medium text-muted-foreground">
                                    {STAT_LABELS[stat.name] ?? stat.name}
                                </span>
                                <span className="w-10 shrink-0 text-right text-sm font-bold text-foreground">
                                    {base_stat}
                                </span>
                                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                                    <div
                                        className={`animate-stat h-full rounded-full ${barColor}`}
                                        style={{
                                            width: `${Math.min((base_stat / MAX_STAT) * 100, 100)}%`,
                                        }}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section
                    className="animate-card-in rounded-2xl border border-border bg-card p-6 shadow-sm"
                    style={{ animationDelay: "300ms" }}
                >
                    <h2 className="text-lg font-bold text-card-foreground">Habilidades</h2>
                    <ul className="mt-4 flex flex-col gap-2">
                        {pokemon.abilities.map(({ ability, is_hidden }) => (
                            <li
                                key={ability.name}
                                className="flex items-center justify-between rounded-xl bg-secondary px-3 py-2 text-sm font-medium capitalize text-secondary-foreground"
                            >
                                {ability.name.replace("-", " ")}
                                {is_hidden && (
                                    <span className="rounded-full bg-background px-2 py-0.5 text-[10px] uppercase text-muted-foreground">
                                        Oculta
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* EVOLUCIONES */}
            <section
                className="animate-card-in rounded-2xl border border-border bg-card p-6 shadow-sm"
                style={{ animationDelay: "360ms" }}
            >
                <h2 className="text-lg font-bold text-card-foreground">Evoluciones</h2>
                <EvolutionChain chain={evolutionChain} currentName={pokemon.species.name} />
            </section>
        </div>
    )
}