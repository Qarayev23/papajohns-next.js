import { ProductsProps, RootProductsProps } from "@/types"
import Product from "./product"
import styles from "./products.module.scss"

const Products = async ({ data }: { data: RootProductsProps }) => {
    return (
        <>
            <section className={styles.products}>
                <div className="g-container">
                    {
                        data.length > 0 ? (
                            <div className={styles.products__list}>
                                {data.map((item: ProductsProps) => (
                                    <Product data={item} key={item.id} />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.products__empty}>Məhsul tapılmadı.</div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Products