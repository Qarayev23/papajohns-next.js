import { MouseEventHandler } from "react";

export interface PizzaFilterProps {
  category?: string;
  _limit?: number;
  q?: string;
}

export interface PizzaPageProps {
  searchParams: PizzaFilterProps;
}

export interface PapadiasFilterProps {
  _limit?: number;
  q?: string;
}

export interface PapadiasPageProps {
  searchParams: PapadiasFilterProps;
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
  category?: string
  ingredients: string[]
  price: any
}

export interface Price {
  small: number
  middle: number
  big: number
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  isEqual: boolean;
}

export interface ButtonProps {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string,
  type?: 'button' | 'submit',
}

export interface LinkProps {
  item: { label: string; path: string },
  isActive: boolean
}

export interface ProductDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  data: PizzasProps;
}