import axios from "axios";
import { FilterProps } from "@/types";

const API = axios.create({ baseURL: process.env.API_URL });

export async function fetchProducts(filters: FilterProps) {
    const { category, _limit, q, slug } = filters;

    let url = `?_limit=${_limit}&q=${q}`

    if (category !== "all") url = `?category=${category}`

    // if (q !== "") url = `?q=${q}`
    console.log(slug + url);


    const res = await API.get(slug + url);

    return res;
}