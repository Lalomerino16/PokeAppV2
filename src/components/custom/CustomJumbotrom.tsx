import { userStore } from "@/store/userStore"

export const CustomJumbotrom = () => {
    const userName = userStore((state) => state.username)

    return (
        <section className="animate-card-in relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-red-500 to-rose-600 px-6 py-10 text-white shadow-lg md:px-12 md:py-14 ">
            {/* Pokébola decorativa de fondo (solo CSS) */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[14px] border-white/15 md:h-80 md:w-80"
            >
                <div className="absolute left-0 top-1/2 h-[14px] w-full -translate-y-1/2 bg-white/15" />
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-white/15 bg-red-500 md:h-24 md:w-24" />
            </div>

            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                    Pokédex
                </span>

                <h1 className="mt-4 text-3xl font-extrabold tracking-tight drop-shadow md:text-5xl">
                    {userName ? (
                        <>
                            ¡Bienvenido, <span className="capitalize">{userName}</span>!
                        </>
                    ) : (
                        "¡Bienvenido, entrenador!"
                    )}
                </h1>

                <p className="mt-3 max-w-md text-base text-white/90 md:text-lg">
                    Aquí podrás encontrar a tu Pokémon favorito. Busca por nombre o filtra por tipo.
                </p>
            </div>
        </section>
    )
}