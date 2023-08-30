'use client'

import styles from "@/components/searchBar/searchBar.module.scss"
import Button from "../button/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const [value, setValue] = useState("")
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete("category");
        searchParams.delete("_limit");
        searchParams.set("q", value);
        const newPathname = `${window.location.pathname}?${searchParams}`;
        router.push(newPathname, { scroll: false });
        setValue("")
    }

    return (
        <div className="g-container">
            <section className={styles.search__bar}>
                <p className={styles.search__bar__text}>
                    İstədiyiniz pizzanı
                    <span> Axtarın!</span>
                </p>
                <form onSubmit={handleSubmit} className={styles.search__bar__form}>
                    <input type="text"
                        className={styles.search__bar__input}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Axtar..." />
                    <Button type="submit">OK</Button>
                </form>
            </section>
        </div>
    )
}

export default SearchBar