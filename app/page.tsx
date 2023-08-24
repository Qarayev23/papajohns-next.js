import "@/app/global.css";
import Products from '@/components/products/products';
import styles from './page.module.css'
import { HomeProps } from "@/types";
import { fetchPizzas } from '@/utils';
import ShowMore from '@/components/showMore/showMore';

export default async function Home({ searchParams }: HomeProps) {
  const data = await fetchPizzas({
    category: searchParams.category || "all",
    _limit: searchParams._limit || 8,
  });

  return (
    <main className={styles.main}>
      <Products data={data} />
      <ShowMore
        pageNumber={(searchParams._limit || 8) / 8}
        isNext={(searchParams._limit || 8) > data.length}
      />
    </main>
  )
}