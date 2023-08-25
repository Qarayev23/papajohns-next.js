import { MouseEventHandler } from "react";

export interface FilterProps {
  category?: string;
  _limit?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface Root {
  length: number;
  map: any;
  pizzas: PizzasProps[]
}

export interface PizzasProps {
  id: number
  name: string
  img: string
  category: string
  ingredients: string[]
  price: Price
}

export interface Price {
  small: number
  middle: number
  big: number
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface ButtonProps {
  text: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ProductDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  data: PizzasProps;
}