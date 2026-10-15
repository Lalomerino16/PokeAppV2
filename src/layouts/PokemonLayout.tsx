import { Outlet } from "react-router"
import { CustomHeader } from "@/components/custom/CustomHeader"




export const PokemonLayout = () => {
    return (
        <main>
            <CustomHeader />
            <section className="container mx-auto px-4 py-8 flex flex-col gap-10 flex-1">
                <Outlet />
            </section>
        </main>
    )
}