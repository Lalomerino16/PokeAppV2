import { Skeleton } from "../ui/skeleton"


export const CustomPokemonPageSkeleton = () => {
    return (
        <section className="mx-auto max-w-4xl px-4 py-8">
            <div className="mt-6 grid gap-8 md:grid-cols-2">
                <Skeleton className="h-96 w-full rounded-2xl" />
                <div className="flex flex-col gap-6">
                    <Skeleton className="h-32 w-full rounded-2xl" />
                    <Skeleton className="h-32 w-full rounded-2xl" />
                    <Skeleton className="h-48 w-full rounded-2xl" />
                </div>
            </div>
        </section>
    )
}


