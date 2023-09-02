import axios from "axios";
import { FilterProps } from "@/types";

export const API = axios.create({ baseURL: process.env.BASE_URL });

export async function fetchProducts(filters: FilterProps) {
    const { category, _limit, q, slug } = filters;

    let url = `?_limit=${_limit}&q=${q}`

    if (category !== "all") url = `?category=${category}`

    const res = await API.get(slug + url);

    return res;
}

export async function fetchCampaigns() {
    const { data } = await API.get("campaigns");
    return data;
}

export async function fetchCampaign(slug: string) {
    const { data } = await API.get(`campaigns?id=${slug}`);
    return data[0];
}