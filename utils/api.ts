import axios from "axios";
import { PapadiasFilterProps, PizzaFilterProps } from "@/types";

const API = axios.create({ baseURL: "https://papajohns-api.onrender.com/" });

export async function fetchPizzas(filters: PizzaFilterProps) {
    const { category, _limit, q } = filters;
    let url = ""

    category === "all" ? url = `?_limit=${_limit}` : url = `?category=${category}`

    if (q !== "") url = `?q=${q}`

    const res = await API.get("pizzas" + url);

    return res;
}

export async function fetchPapadias(filters: PapadiasFilterProps) {
    const { _limit, q } = filters;
    let url = `?_limit=${_limit}`

    if (q !== "") url = `?q=${q}`

    const res = await API.get("papadias" + url);

    return res;
}