'use client'
import Button from '@/components/button/button'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'
import styles from './basketPage.module.scss'
import { BiSolidTrash } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { decrement, increment, removeFromBasket } from '@/redux/features/basketSlice'
import { useRouter } from 'next/navigation'
import type { Metadata } from 'next'

const metadata: Metadata = {
    title: 'Papa Johns | Basket',
}

const BasketPage = () => {
    const { totalQuantity, totalAmount, basketItems } = useAppSelector((state) => state.basketReducer);
    const dispatch = useAppDispatch()
    const router = useRouter()

    return (
        <section className={styles.basket__page}>
            <div className="g-container">
                <h1 className={styles.basket__page__title}>Səbət</h1>
                <p className={styles.basket__page__subtitle}>Səbətinizdə məhsulların sayı: <span>{totalQuantity}</span></p>
                <div className={styles.basket__product}>
                    {
                        basketItems.map((item, i) => (
                            <div key={i} className={styles.basket__product__row}>
                                <div className={styles.basket__product__info}>
                                    <div className={styles.basket__product__img}>
                                        <Image src={item.img} fill alt={item.name} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4 className={styles.basket__product__name}>{item.name}</h4>
                                        {item.type && (
                                            <p className={styles.basket__product__type}>{item.type}</p>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.basket__product__count}>
                                    <button className={styles.basket__product__count__btn + " " + styles.basket__product__count__btn__minus}
                                        style={{ background: item.count === 1 ? "gray" : "#0f9675" }}
                                        onClick={() => { dispatch(decrement({ id: item.id, type: item.type? item.type: null, price: item.price })) }}
                                        disabled={item.count === 1}>
                                        <FaMinus />
                                    </button>
                                    <span className={styles.basket__product__count__result}>{item.count}</span>
                                    <button className={styles.basket__product__count__btn + " " + styles.basket__product__count__btn__plus}
                                        onClick={() => { dispatch(increment({ id: item.id, type: item.type? item.type: null, price: item.price })) }}>
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className={styles.basket__product__result}>
                                    <span className={styles.basket__product__price}>
                                        {item.totalPrice}M
                                    </span>
                                    <button className={styles.basket__product__remove}
                                        onClick={() => dispatch(removeFromBasket({ id: item.id, type: item.type? item.type: null, price: item.totalPrice, count: item.count }))}>
                                        <BiSolidTrash />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.basket__page__footer}>
                    {basketItems.length > 0 ? <Button>sifarişi göndər</Button>
                        : <Button handleClick={() => router.push("/menu")}>Menyuya keçin</Button>}
                    <span className={styles.basket__page__footer__total}>Ümumi məbləğ: {totalAmount}M</span>
                </div>
            </div>
        </section>
    )
}

export default BasketPage