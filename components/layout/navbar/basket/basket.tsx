import { BiSolidBasket } from "react-icons/bi";
import styles from './basket.module.scss'


const Basket = () => {
    return (
        <button className={styles.basket}>
            <div className={styles.basket__wrapper}>
                <span className={styles.basket__count}>3</span>
                <BiSolidBasket className={styles.basket__icon} />
            </div>
            <span className={styles.basket__price}>32M</span>
        </button>
    )
}

export default Basket