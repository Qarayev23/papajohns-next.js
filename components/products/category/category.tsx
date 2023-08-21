import styles from "./category.module.scss"

const Category = () => {
    return (
        <ul className={styles.products__nav}>
            <li className={styles.products__nav__item}>Hamısı</li>
            <li className={styles.products__nav__item}>Toyuqlu</li>
            <li className={styles.products__nav__item}>Ət ilə</li>
            <li className={styles.products__nav__item}>Vegetarian</li>
            <li className={styles.products__nav__item}>Acılı</li>
        </ul>
    )
}

export default Category