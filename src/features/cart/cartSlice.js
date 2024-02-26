import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     id: 12,
  //     name: "Mediteranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payLoad = newItem
      // console.log("state.cart", state.cart);
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payLoad = pizzaId
      console.log("id....", action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      console.log("cart", state.cart);
    },
    increaseItem(state, action) {
      //payLoad = pizzaId
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItem(state, action) {
      //payLoad = pizzaId
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => {
  return state.cart.cart;
};

export const getQuantityOfCurrentItemById = (id) => (state) => 
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0; //*

//* reselect
