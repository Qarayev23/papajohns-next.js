import axios from "axios"
import Category from "./category/category"
import Product from "./product/product"
import styles from "./products.module.scss"
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

async function getData() {
    try {
        const {data} = await axios.get("http://localhost:3001/pizzas")
        return data
    } catch (error) {
        console.log(error);
    }
}

const Products = async () => {
    const data = await getData()

    return (
        <>
            <section className={styles.products}>
                <div className="container">
                    <Category />
                    <div className={styles.products__list}>
                        {data.map((item: any) => (
                            <Product data={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products