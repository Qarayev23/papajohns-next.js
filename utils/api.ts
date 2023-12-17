import { FilterProps } from "@/types";
import { notFound } from "next/navigation";

export async function fetchProducts(filters: FilterProps) {
    const { category, _limit, q, slug } = filters;

    let params = `?_limit=${_limit}&q=${q}`

    if (category !== "all") params = `?category=${category}`

    const res = await fetch(`${process.env.BASE_URL}${slug}${params}`);

    const totalCount = res.headers.get("x-total-count");
    const data = await res.json();

    if (res.ok) return { data, totalCount };

    notFound();
}

export async function fetchCampaigns() {
    const res = await fetch(`${process.env.BASE_URL}campaigns`);
    const data = await res.json();

    if (res.ok) return data;

    notFound();
}

export async function fetchCampaign(slug: string) {
    const res = await fetch(`${process.env.BASE_URL}campaigns/${slug}`);
    const data = await res.json();

    if (res.ok) return data;

    notFound();
}