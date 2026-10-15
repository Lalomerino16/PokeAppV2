import {  createHashRouter } from "react-router";
import { lazy, Suspense } from "react"
import { WelcomePage } from "./pages/WelcomePage";
import { PokemonsPage } from "./pages/PokemonsPage";
import { PokemonLayout } from "./layouts/PokemonLayout";

import { ProtectedRoute } from "./components/protectedRoutes/ProtectedRoute";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CustomPokemonPageSkeleton } from "./components/custom/CustomPokemonPageSkeleton";


// eslint-disable-next-line react-refresh/only-export-components
const PokemonPage = lazy(() => 
    import("@/pages/PokemonPage").then((module) => ({
        default: module.PokemonPage,
    }))

)


export const RouterApp = createHashRouter([
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/",
                element: <PokemonLayout />,
                children: [
                    {
                        index: true,
                        element: <PokemonsPage />,
                    },
                    {
                        path: "/pokemon/:pokemonName",
                        element: (
                            <Suspense fallback={<CustomPokemonPageSkeleton />}>
                                <PokemonPage />
                            </Suspense>
                        ),
                    },
                ]
            }
        ]
    },
    {
        path: "/welcome",
        element: <WelcomePage />
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }



])