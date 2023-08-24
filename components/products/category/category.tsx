'use client'

import Link from "next/link"
import styles from "./category.module.scss"
import { categoryLinks } from "@/constants"
import { useSearchParams } from 'next/navigation'

const Category = () => {
    const searchParams = useSearchParams()

    const LinkComponent = (item: { label: string; path: string }, isActive: boolean) => {
        return (
            <li className={styles.products__nav__item}>
                <Link href={`?category=${item.path}`} className={isActive ? styles.products__nav__link + " " + styles.active
                    : styles.products__nav__link}>
                    {item.label}
                </Link>
            </li>
        )
    }

    return (
        <ul className={styles.products__nav}>
            {
                searchParams.has('category') ? (
                    categoryLinks.map(item => {
                        const isActive = searchParams.get("category") === item.path
                        return (
                            LinkComponent(item, isActive)
                        )
                    })
                ) : (
                    <>
                        <li className={styles.products__nav__item}>
                            <Link href="?category=all" className={styles.products__nav__link + " " + styles.active}>
                                Hamısı
                            </Link>
                        </li>
                        {
                            categoryLinks.map(item => {
                                if (item.path !== "all") {
                                    return (
                                        LinkComponent(item, false)
                                    )
                                }
                            })
                        }
                    </>
                )
            }
        </ul>
    )
}

export default Category