'use client'

import Image from 'next/image'
import styles from "./product.module.scss"
import Button from '@/components/button/button'
import { PizzasProps } from '@/types'
import { useState } from 'react'
import ProductDetailModal from '@/components/modal/productDetailModal'

const Product = ({ data }: { data: PizzasProps }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image src={data.img} fill alt={data.name} />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>{data.name}</h4>
                    <Button text="Bunu seç" 
                    handleClick={
                        () => setIsOpen(true)
                    } />
                </div>
                <p className={styles.product__ingredients}>
                    {data.ingredients}
                </p>
            </div>

            <ProductDetailModal isOpen={isOpen} closeModal={() => setIsOpen(false)} data={data} />
        </>
    )
}

export default Product