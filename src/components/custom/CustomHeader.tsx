import logoPokedex from "@/assets/img-pokedex.png"
import pokeball from "@/assets/pokeball.png"
import { Link, useNavigate } from "react-router"

import { userStore } from "@/store/userStore"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export const CustomHeader = () => {
    const navigate = useNavigate()
    const userName = userStore((state) => state.username)
    const clearUser = userStore((state) => state.clearUser)

    const handleLogout = () => {
        clearUser()
        navigate("/welcome", { replace: true })
    }

    return (
        <header className="relative">
            <div className="bg-red-500 h-12 relative">
                <Link to={"/"}>
                    <div className="h-13 w-63 absolute left-3 bottom-0">
                        <img
                            src={logoPokedex}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                </Link>
            </div>
            <div className="bg-black h-11"></div>

            {/* La pokébola ahora es el botón del menú de usuario */}
            <div className="absolute bottom-0 top-8 right-8 z-10 h-11 w-15">
                <Popover>
                    <PopoverTrigger
                        aria-label="Menú de usuario"
                        title="Menú de usuario"
                        className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-black shadow-lg ring-2 ring-black/40 transition-all duration-200 hover:scale-110 hover:shadow-xl hover:ring-4 hover:ring-white/60 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400"
                    >
                        {/* Pulso suave que invita al clic */}
                        <span
                            aria-hidden
                            className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/40 [animation-duration:2.5s]"
                        />
                        <img
                            src={pokeball}
                            alt=""
                            className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[360deg]"
                        />
                    </PopoverTrigger>

                    <PopoverContent align="end" className="w-56">
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Sesión iniciada como
                                </p>
                                <p className="font-semibold capitalize">
                                    {userName || "Entrenador"}
                                </p>
                            </div>

                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                Cerrar sesión
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    )
}