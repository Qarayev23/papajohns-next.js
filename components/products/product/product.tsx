'use client'
import Image from 'next/image'
import styles from "./product.module.scss"
import Button from '@/components/button/button'
import ProductDetailModal from '@/components/modal/productDetailModal'
import { useState } from 'react'

const Product = () => {
    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image src="/img/hot_and_spaysi.jpg" alt="Hot and Spaysi" fill />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>Hot and Spaysi</h4>
                    <Button text="Bunu seç"/>
                </div>
                <p className={styles.product__ingredients}>
                    Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri
                </p>
            </div>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image src="/img/hot_and_spaysi.jpg" alt="Hot and Spaysi" fill />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>Hot and Spaysi</h4>
                    <button className="button">Bunu seç</button>
                </div>
                <p className={styles.product__ingredients}>
                    Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri
                </p>
            </div>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image src="/img/hot_and_spaysi.jpg" alt="Hot and Spaysi" fill />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>Hot and Spaysi</h4>
                    <button className="button">Bunu seç</button>
                </div>
                <p className={styles.product__ingredients}>
                    Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri
                </p>
            </div>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image src="/img/hot_and_spaysi.jpg" alt="Hot and Spaysi" fill />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>Hot and Spaysi</h4>
                    <button className="button">Bunu seç</button>
                </div>
                <p className={styles.product__ingredients}>
                    Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri
                </p>
            </div>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image src="/img/hot_and_spaysi.jpg" alt="Hot and Spaysi" fill />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>Hot and Spaysi</h4>
                    <button className="button">Bunu seç</button>
                </div>
                <p className={styles.product__ingredients}>
                    Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri
                </p>
            </div>
            <div className={styles.product__col}>
                <div className={styles.product__img}>
                    <Image src="/img/hot_and_spaysi.jpg" alt="Hot and Spaysi" fill />
                </div>
                <div className={styles.product__caption}>
                    <h4 className={styles.product__title}>Hot and Spaysi</h4>
                    <button className="button">Bunu seç</button>
                </div>
                <p className={styles.product__ingredients}>
                    Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri
                </p>
            </div>

            <ProductDetailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Product