import Image from "next/image"
import Category from "./category/category"
import styles from "./products.module.scss"

const Products = () => {
    return (
        <section className={styles.products}>
           <Category />
            <div className={styles.products__list}>
                <div className={styles.products__col}>
                    <Image src="/img/hot_and_spaysi.jpg" alt="Hot and Spaysi" width={100} height={100} />
                        <div className="products__caption">
                            <h4 className="products__title">Hot and Spaysi</h4>
                            <button className="button">Bunu seç</button>
                        </div>
                        <p className="products__ingridents">Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri</p>
                </div>
            </div>
        </section>
    )
}

export default Products