import { createSlice } from "@reduxjs/toolkit";

export const showCartSlice = createSlice({
  name: 'showCart',
  initialState: { isShown: false, items: [] },
  reducers: {
    toggle: (state) => { state.isShown = !state.isShown },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.total += newItem.price;
      } else {
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.total -= existingItem.price;
      }
    }
  }
});

export const { toggle, addItem, removeItem } = showCartSlice.actions;
const showCartReducer = showCartSlice.reducer;

export default showCartReducer;