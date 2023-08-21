import Products from '@/components/products/products';
import styles from './page.module.css'
import axios from 'axios'

async function getData() {
  try {
    const data = await axios.get("http://localhost:3001/pizzas")
    return data
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
   const {data} = await getData()
  return (
    <main className={styles.main}>
      <Products />
      {data.map(item => {
        return <div>
          {item.name}
        </div>
      })}
    </main>
  )
}
