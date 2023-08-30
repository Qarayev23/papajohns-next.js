import Products from '@/components/products/products';
import { PapadiasPageProps } from "@/types";
import ShowMore from '@/components/showMore/showMore';
import SearchBar from '@/components/searchBar';
import { fetchPapadias } from '@/utils/api';

const Home = async ({ searchParams }: PapadiasPageProps) => {
  const res = await fetchPapadias({
    _limit: searchParams._limit || 8,
    q: searchParams.q || "",
  });

  return (
    <main>
      <SearchBar />
      <Products data={res.data} />
      <ShowMore
        pageNumber={(searchParams._limit || 8) / 8}
        isNext={res.headers["x-total-count"] ? (searchParams._limit || 8) > res.headers["x-total-count"] : true}
        isEqual={res.headers["x-total-count"] ? (searchParams._limit || 8) === res.headers["x-total-count"] : true}
      />
    </main>
  )
}

export default Home