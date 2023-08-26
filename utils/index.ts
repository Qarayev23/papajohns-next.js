import { FilterProps } from "@/types";
import axios from "axios";

export async function fetchPizzas(filters: FilterProps) {
  const { category, _limit } = filters;
  let url = "https://papajohns-backend.onrender.com/pizzas"

  category === "all" ? url += `?_limit=${_limit}` : url += `?category=${category}&?_limit=${_limit}`

  const { data } = await axios.get(url);

  return data;
}
