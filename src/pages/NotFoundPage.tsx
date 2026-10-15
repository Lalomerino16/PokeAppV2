import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"




export const NotFoundPage = () => {

    return(
        <main className="relative min-h-screen overflow-hidden bg-[#f7f2e8] px-5 py-7 font-mono text-[#18262d] sm:px-10 lg:px-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#b7aa94_1px,transparent_1px)] [background-size:18px_18px]"
            />

            <header className="relative mx-auto flex max-w-6xl items-center justify-between border-b-2 border-[#18262d] pb-4 text-[11px] font-bold tracking-[0.16em]">
                <div className="flex items-center gap-2.5 text-sm tracking-[0.22em]">
                <span className="size-3 rounded-full border-2 border-[#18262d] bg-[#ef5350] shadow-[3px_3px_0_#18262d]" />
                POKÉDEX
                </div>

                <div className="flex items-center gap-2 text-[#647177] max-sm:hidden">
                <span className="size-2 rounded-full bg-[#4dc778] shadow-[0_0_0_3px_#d4ead9]" />
                SYSTEM ONLINE
                </div>
            </header>

            <section className="relative mx-auto mt-[clamp(50px,10vh,106px)] max-w-7xl" aria-labelledby="not-found-title">
                <div className="mb-8 flex justify-between gap-5 text-[10px] font-bold tracking-[0.16em] text-[#718087]">
                    <span>FIELD GUIDE / ERROR LOG</span>
                    <span>NO. 404</span>
                </div>

                <div className="grid items-center gap-9 lg:grid-cols-[0.8fr_1fr_1.2fr] lg:gap-[clamp(26px,5vw,76px)]">
                <div className="text-center font-sans text-[clamp(130px,20vw,270px)] font-black leading-[0.75] tracking-[-0.07em] text-[#ef5350] [text-shadow:7px_7px_0_#18262d] lg:text-left">
                    404
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="relative aspect-square w-[clamp(150px,20vw,230px)] rounded-full border-[10px] border-[#18262d] bg-[linear-gradient(#ef5350_0_46%,#18262d_46%_54%,#f6f0e5_54%)] shadow-[10px_12px_0_#d8cdbd] max-sm:border-[7px]">
                        <div className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-[8px] border-[#18262d] bg-[#f7f2e8] max-sm:size-9 max-sm:border-[6px]" />
                    </div>
                    <span className="border-t border-[#aeb4b2] pt-2.5 text-[10px] tracking-[0.14em] text-[#718087]">
                        UNKNOWN SPECIES
                    </span>
                </div>

                <div className="border-l-2 border-[#18262d] pl-6 lg:pl-12 max-lg:border-l-0 max-lg:border-t-2 max-lg:pt-7 max-lg:text-center">
                    <p className="mb-4 text-[11px] font-bold tracking-[0.14em] text-[#ef5350]">
                    // ENCOUNTER NOT FOUND
                    </p>

                    <h1 id="not-found-title" className="font-serif text-[clamp(42px,5vw,70px)] font-bold leading-[0.98] tracking-[-0.055em]">
                        This page
                    <br />
                    <span className="text-[#ef5350]">fled the battle.</span>
                    </h1>

                    <p className="my-6 max-w-[370px] font-sans text-[15px] leading-6 text-[#58666d] max-lg:mx-auto">
                        The route you&apos;re looking for doesn&apos;t exist in this region. Check the address or return to your starting point.
                    </p>

                    <div className="flex flex-wrap gap-3 max-lg:justify-center">
                        <Button className="rounded-none border-2 border-[#18262d] bg-[#18262d] px-4 py-6 font-mono text-[11px] tracking-[0.1em] text-[#f7f2e8] shadow-none hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#18262d] hover:shadow-[4px_4px_0_#18262d]">
                            <Link to="/">
                            <ArrowLeft data-icon="inline-start" />
                                RETURN HOME
                            </Link>
                        </Button>

                    </div>
                </div>
                </div>

                <footer className="mt-12 flex flex-col gap-2 border-t-2 border-[#18262d] pt-3 text-[8px] font-bold tracking-[0.16em] text-[#718087] sm:mt-20 sm:flex-row sm:justify-between sm:text-[10px]">
                    <span>PROF. OAK&apos;S DIGITAL ARCHIVE</span>
                    <span>LAT: 35.6895° N / LONG: 139.6917° E</span>
                </footer>
            </section>

        </main>
    )


}