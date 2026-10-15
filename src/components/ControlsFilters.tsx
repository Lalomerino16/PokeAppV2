
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { useRef } from "react"
import { useSearchParams } from "react-router"
import { POKEMON_TYPE_OPTIONS } from "@/helpers/pokemonTypes"

const typeItems = [
    { value: "all", label: "Todas" },
    ...POKEMON_TYPE_OPTIONS,
]



export const ControlsFilters = () => {

    const [searchParams, setSearchParams ] = useSearchParams();
    const inputValue = useRef<HTMLInputElement>(null);
    
    const handlePokemonSearch = () => {
        const query = inputValue.current?.value.trim().toLowerCase()

        setSearchParams((prev) => {
            const next = new URLSearchParams(prev)
            if (query) next.set("q", query)
            else next.delete("q")
            next.delete("page")
            return next
        })
    }
    
    const handleKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;
        
        handlePokemonSearch();
    }

    const handleTypeChange = (value: string | null) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev)
            if (!value || value === "all") next.delete("type")
            else next.set("type", value)
            next.delete("page") // vuelve a la página 1
            return next
        })
    }
    
    return(

        <div className="flex items-center gap-9  h-13">
            <div className="flex items-center gap-2">
                <Input 
                    key={searchParams.get("q") ?? ""}
                    type="text"
                    placeholder="Buscar Pokemon"
                    className="py-5 px-4 text-lg"
                    ref={inputValue}
                    defaultValue={searchParams.get("q") ?? ""}
                    onKeyDown={handleKeyDownSearch}
                />
                <Button
                    className="py-5 px-4 text-md bg-red-500 text-white hover:bg-red-600"
                    size="lg"
                    onClick={handlePokemonSearch}
                >
                    Buscar
                </Button>
            </div>
            
            <Select 
                value={searchParams.get("type") ?? "all"} 
                onValueChange={handleTypeChange}
                items={typeItems}
            >
                <SelectTrigger className="w-45 py-5 px-4">
                    <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Categoría</SelectLabel>
                    {typeItems.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                            {label}
                        </SelectItem>
                    ))}
                </SelectGroup>
                </SelectContent>
            </Select>
                
            
        </div>
    )


}