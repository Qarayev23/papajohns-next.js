'use client'

import Link from "next/link"
import styles from "./category.module.scss"
import { categoryLinks } from "@/constants"
import { usePathname } from "next/navigation"

const Category = () => {
    const pathname = usePathname()

    return (
        <ul className={styles.products__nav}>
            {categoryLinks.map(item => {
                const isActive = pathname.startsWith(item.path)

                return (
                    <li className={styles.products__nav__item}>
                        <Link href={item.path} className={isActive ? styles.products__nav__link + " " + styles.active
                            : styles.products__nav__link}>
                            {item.label}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Category