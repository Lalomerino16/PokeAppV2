import { AlertTriangle } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router"

interface CustomErrorProps{
    messageError: string;
}



export const CustomError = ({ messageError }: CustomErrorProps) => {



    return(
        <section className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    ¡Ups! Algo salió mal
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Lo sentimos, hemos encontrado un error: <strong className="text-red-500">{messageError}</strong> inesperado en el servidor. Por favor, intenta recargar la página o vuelve al inicio.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button onClick={() => window.location.reload()} variant="outline">
                        Reintentar
                    </Button>
                    <Button>
                        <Link to="/">
                        Volver al Inicio
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}