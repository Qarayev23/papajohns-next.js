import Category from "./category/category"
import Product from "./product/product"
import styles from "./products.module.scss"

const Products = () => {
    return (
        <>
            <section className={styles.products}>
                <div className="container">
                    <Category />
                    <div className={styles.products__list}>
                        <Product />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products