import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "react-router"

interface CustomPaginationProps {
    totalPages: number
}

// Devuelve algo como [1, "...", 4, 5, 6, "...", 68]
const getPageNumbers = (current: number, total: number): (number | "...")[] => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

    const pages = new Set<number>([1, total, current - 1, current, current + 1])
    const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b)

    const result: (number | "...")[] = []
    sorted.forEach((p, i) => {
        if (i > 0 && p - sorted[i - 1] > 1) result.push("...")
        result.push(p)
    })
    return result
}

export const CustomPagination = ({ totalPages }: CustomPaginationProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Math.max(Number(searchParams.get("page")) || 1, 1)

    const buildHref = (newPage: number) => {
        const next = new URLSearchParams(searchParams)
        if (newPage <= 1) next.delete("page")
        else next.set("page", String(newPage))
        const qs = next.toString()
        return qs ? `?${qs}` : "?"
    }

    const goToPage = (e: React.MouseEvent, newPage: number) => {
        e.preventDefault()
        if (newPage < 1 || newPage > totalPages || newPage === page) return

        setSearchParams((prev) => {
            const next = new URLSearchParams(prev)
            if (newPage <= 1) next.delete("page")
            else next.set("page", String(newPage))
            return next
        })
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (totalPages <= 1) return null

    const disabledClass = "pointer-events-none opacity-50"

    return (
        <Pagination className="mt-8">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={buildHref(page - 1)}
                        onClick={(e) => goToPage(e, page - 1)}
                        aria-disabled={page <= 1}
                        className={page <= 1 ? disabledClass : ""}
                    />
                </PaginationItem>

                {getPageNumbers(page, totalPages).map((p, i) =>
                    p === "..." ? (
                        <PaginationItem key={`ellipsis-${i}`}>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={p}>
                            <PaginationLink
                                href={buildHref(p)}
                                isActive={p === page}
                                onClick={(e) => goToPage(e, p)}
                            >
                                {p}
                            </PaginationLink>
                        </PaginationItem>
                    )
                )}

                <PaginationItem>
                    <PaginationNext
                        href={buildHref(page + 1)}
                        onClick={(e) => goToPage(e, page + 1)}
                        aria-disabled={page >= totalPages}
                        className={page >= totalPages ? disabledClass : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}