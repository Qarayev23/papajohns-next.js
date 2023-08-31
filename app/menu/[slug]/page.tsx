import Products from '@/components/products/products';
import { MenuPageProps } from "@/types";
import ShowMore from '@/components/showMore/showMore';
import ProductCategory from '@/components/productCategory';
import { fetchProducts } from '@/utils/api';

const Page = async ({ searchParams, params }: MenuPageProps) => {
  const res = await fetchProducts({
    category: searchParams.category || "all",
    _limit: searchParams._limit || 8,
    q: searchParams.q || "",
    slug: params.slug
  });

  return (
    <main>
      {params.slug === "pizza" && <ProductCategory />}
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