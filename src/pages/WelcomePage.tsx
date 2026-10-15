import { useRef } from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import logoPokemon from "@/assets/img-pokedex.png"
import pokeball from "@/assets/pokeball.png"
import { useNavigate } from 'react-router';
import { userStore } from '@/store/userStore';


export const WelcomePage = () => {

    const inputValue = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const setUsername = userStore((state) => state.setUsername);



    const handleSubmit = () => {
        
        const valueName = inputValue.current?.value;
        if (!valueName?.trim()) return;

        setUsername(valueName);
        navigate("/");
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <section className="h-screen flex flex-col">
            
            <div className="mx-auto max-w-7xl flex-1">

                <div className="flex flex-col items-center gap-15 h-full justify-center">
                    <div className="flex flex-col items-center gap-10">
                        <div>
                            <img 
                                src={logoPokemon}
                                alt="Pokemon Logo"
                            />
                        </div>
                        <h1 className="font-bold text-red-500 text-4xl">Hola Entrenador!</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Para poder comenzar, ingresa tu nombre</p>
                        <div className="flex items-center gap-4">
                            <Input 
                                ref={inputValue}
                                type="text"
                                placeholder="Ingresa tu nombre"
                                className="py-5 px-4 text-lg"
                                onKeyDown={handleKeyDown}
                            />
                            <Button 
                                className="bg-red-500 text-white hover:bg-red-600 h-full"
                                size="lg"
                                onClick={handleSubmit}
                            >
                                Comenzar
                            </Button>
                        </div>
                    </div>

                </div>


            </div>

            <footer className="relative">
                <div className="h-13 bg-red-500"></div>
                <div className="h-11 bg-black"></div>
                <div
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-10 h-10 w-15"
                >
                    <img 
                        className="w-fullh-full"
                        src={pokeball}
                        alt="Pokeball"
                    />
                </div>
            
            </footer>

        </section>
    )
}