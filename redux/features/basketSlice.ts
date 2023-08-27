import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BasketProps = {
  name: string
  img: string,
  price: number,
  type: string,
  count: number,
  totalPrice: number,
  id: number
}

type basketState = {
  totalQuantity: number;
  totalAmount: number;
  basketItems: BasketProps[];
};

const initialState = {
  totalQuantity: 0,
  totalAmount: 0,
  basketItems: [],
} as basketState;

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    removeFromBasket: (state, action: PayloadAction<{ id: number; price: number; count: number; type: string; }>) => {
      console.log(action.payload.type);

      state.basketItems = state.basketItems.filter(item => {
        if (item.id === action.payload.id) {
          return item.type !== action.payload.type
        } else {
          return item.id !== action.payload.id
        }
      })
      state.totalQuantity -= action.payload.count;
      state.totalAmount -= action.payload.price;
    },
    increment: (state, action: PayloadAction<{ id: number; price: number; type: string; }>) => {
      state.basketItems = state.basketItems.map(item => item.id === action.payload.id && item.type === action.payload.type ?
        { ...item, count: item.count + 1, totalPrice: item.totalPrice + action.payload.price } : item)
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    decrement: (state, action: PayloadAction<{ id: number; price: number; type: string; }>) => {
      state.basketItems = state.basketItems.map(item => item.id === action.payload.id && item.type === action.payload.type ?
        { ...item, count: item.count - 1, totalPrice: item.totalPrice - action.payload.price } : item)
      state.totalQuantity -= 1;
      state.totalAmount -= action.payload.price;
    },
    addBaket: (state, action: PayloadAction<BasketProps>) => {
      const check = state.basketItems.some(item => item.id === action.payload.id && item.type === action.payload.type)
      if (!check) {
        state.basketItems.push(action.payload)
      }
      else {
        state.basketItems = state.basketItems.map(item => item.id === action.payload.id && item.type === action.payload.type ?
          { ...item, count: item.count + action.payload.count, totalPrice: item.totalPrice + action.payload.totalPrice } : item)
      }
      state.totalQuantity += action.payload.count;
      state.totalAmount += action.payload.totalPrice;
    },
  },
});

export const {
  increment,
  decrement,
  addBaket,
  removeFromBasket
} = basket.actions;
export default basket.reducer;