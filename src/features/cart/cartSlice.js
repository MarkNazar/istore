import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  isCartActive: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      cartSlice.caseReducers.openCart(state);
      cartSlice.caseReducers.saveToLocalStorage(state);
    },
    deleteItem(state, action) {
      const newCart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
      state.cart = newCart;
      cartSlice.caseReducers.saveToLocalStorage(state);
    },
    updateItemQuantity(state, action) {
      // console.log(actio.payload);
      const item = state.cart.find(
        (item) => item.productId === action.payload.productId
      );

      if (!item) {
        cartSlice.caseReducers.addItem(state, action);
      } else {
        if (item) item.quantity += action.payload.quantity;
        item.totalPrice = item.unitPrice * item.quantity;
      }
      cartSlice.caseReducers.saveToLocalStorage(state);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
      cartSlice.caseReducers.saveToLocalStorage(state);
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
      cartSlice.caseReducers.saveToLocalStorage(state);
    },
    clearCart(state) {
      state.cart = [];
      cartSlice.caseReducers.saveToLocalStorage(state);
    },
    closeCart(state) {
      state.isCartActive = false;
    },
    openCart(state) {
      state.isCartActive = true;
    },
    saveToLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  updateItemQuantity,
  clearCart,
  closeCart,
  openCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (store) => {
  return store.cart.cart.reduce((sum, item) => {
    return item.quantity + sum;
  }, 0);
};

export const getCurrentQuantityById = (id) => {
  return (store) => {
    return (
      store.cart.cart.find((item) => {
        return item.productId === id;
      })?.quantity ?? 0
    );
  };
};

export const getTotalPrice = (store) => {
  return store.cart.cart.reduce((sum, item) => {
    return item.totalPrice + sum;
  }, 0);
};
