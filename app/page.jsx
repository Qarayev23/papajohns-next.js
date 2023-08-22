import Products from '@/components/products/products';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Products />
    </main>
  )
}
