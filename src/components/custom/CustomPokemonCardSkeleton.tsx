import { Skeleton } from "../ui/skeleton"

export const PokemonCardSkeleton = () => {
    return (
        <article className="w-full border-8 border-gray-200 rounded-lg text-center flex flex-col overflow-hidden">
            <header>
                <div className="flex flex-col">
                    {/* Zona de la imagen */}
                    <div className="h-38 flex items-center justify-center bg-gray-100">
                        <Skeleton className="h-28 w-28 rounded-full" />
                    </div>

                    {/* Nombre y tipos */}
                    <div className="h-22 flex flex-col items-center justify-center gap-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-20" />
                    </div>
                </div>
            </header>

            {/* Stats (6 items en 2 columnas) */}
            <div className="bg-gray-100 py-4">
                <ul className="grid grid-cols-2 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <li key={i} className="flex flex-col items-center gap-1">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-4 w-8" />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botón */}
            <footer className="flex items-center justify-center py-2">
                <Skeleton className="h-8 w-24" />
            </footer>
        </article>
    )
}