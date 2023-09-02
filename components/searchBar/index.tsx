'use client'

import styles from "@/components/searchBar/index.module.scss"
import Button from "../button"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const [value, setValue] = useState("")
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (value.trim() === "") return

        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete("category");
        searchParams.delete("_limit");
        searchParams.set("q", value);
        const newPathname = `${window.location.origin}/menu/allProducts?${searchParams}`;
        router.push(newPathname, { scroll: false });
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className={styles.search__form}>
            <input type="text"
                className={styles.search__form__input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Margarita..." />
            <Button type="submit">Axtar</Button>
        </form>
    )
}

export default SearchBar