import Products from '@/components/products';
import { MenuPageProps } from "@/types";
import ShowMore from '@/components/showMore';
import ProductCategory from '@/components/productCategory';
import { fetchProducts } from '@/utils/api';
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Papa Johns | ${params.slug}`,
  }
}

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