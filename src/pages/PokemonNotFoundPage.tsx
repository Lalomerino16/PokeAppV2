import { Link } from "react-router"

interface Props {
    title?: string
    description?: string
}

export const PokemonNotFoundPage = ({
    title = "¡Se escapó!",
    description = "No encontramos lo que buscabas.",
}: Props) => {
    return (
        <section className="animate-card-in mt-10 flex flex-col items-center text-center">
          
            <div
                aria-hidden
                className="relative h-40 w-40 animate-float overflow-hidden rounded-full border-8 border-black bg-white shadow-xl"
            >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-red-500" />
                <div className="absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 bg-black" />
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-black bg-white">
                    <span className="text-xl font-black text-black">?</span>
                </div>
            </div>

            <p className="mt-8 text-6xl font-black tracking-tight text-red-500">404</p>
            <h1 className="mt-2 text-2xl font-extrabold md:text-3xl">{title}</h1>
            <p className="mt-2 max-w-md text-muted-foreground">{description}</p>

            <Link
                to="/"
                className="mt-6 rounded-full bg-red-500 px-6 py-2.5 font-semibold text-white shadow transition-colors hover:bg-red-600"
            >
                Volver a la Pokédex
            </Link>
        </section>
    )
}