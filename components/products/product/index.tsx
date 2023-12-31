'use client'

import Image from 'next/image'
import styles from "./product.module.scss"
import Button from '@/components/button'
import { ProductsProps } from '@/types'
import { useState } from 'react'
import ProductDetailModal from '@/components/modals/productDetailModal'

const Product = ({ data }: { data: ProductsProps }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image
                        src={data.img}
                        fill
                        sizes="(max-width: 576px) 100vw, (max-width: 991px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        alt={data.name} />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>{data.name}</h4>
                    <Button handleClick={() => setIsOpen(true)}>
                        Bunu seç
                    </Button>
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