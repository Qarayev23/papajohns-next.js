'use client'
import Image from 'next/image'
import styles from "./product.module.scss"
import Button from '@/components/button/button'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

interface Root {
    id: number
    name: string
    img: string
    ingredients: string[]
    price: Price
}

interface Price {
    small: number
    middle: number
    big: number
}

const Product = ({ data }: { data: Root }) => {
    const searchParams = useSearchParams()
    useEffect(() => {
        
       console.log("asd");
       
    }, [searchParams])

    return (
        <div className={styles.product__col}>
            <div className={styles.product__img}>
                <Image src={data.img} fill alt={data.name} />
            </div>
            <div className={styles.product__caption}>
                <h4 className={styles.product__title}>{data.name}</h4>
                <Button text="Bunu seç" />
            </div>
            <p className={styles.product__ingredients}>
                {data.ingredients}
            </p>
        </div>
    )
}

export default Product