import Products from '@/components/products/products';
import { PizzaPageProps } from "@/types";
import ShowMore from '@/components/showMore/showMore';
import ProductCategory from '@/components/productCategory';
import SearchBar from '@/components/searchBar';
import { fetchPizzas } from '@/utils/api';

const Page = async ({ searchParams }: PizzaPageProps) => {
  const res = await fetchPizzas({
    category: searchParams.category || "all",
    _limit: searchParams._limit || 8,
    q: searchParams.q || "",
  });

  return (
    <main>
      <SearchBar />
      <ProductCategory />
      <Products data={res.data} />
      <ShowMore
        pageNumber={(searchParams._limit || 8) / 8}
        isNext={res.headers["x-total-count"] ? (searchParams._limit || 8) > res.headers["x-total-count"] : true}
        isEqual={res.headers["x-total-count"] ? (searchParams._limit || 8) === res.headers["x-total-count"] : true}
      />
    </main>
  )
}

export default Page