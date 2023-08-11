import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity = state.totalQuantity + newItem.quantity;
      state.totalPrice = state.totalPrice + newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    reduceQunatiyOfItemByOne(state, action) {
      const itemWillBeReduced = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemWillBeReduced.id
      );

      if (existingItem?.quantity > 1) {
        state.totalQuantity = state.totalQuantity - 1;
        state.totalPrice = state.totalPrice - existingItem.price;

        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        existingItem.quantity = existingItem.quantity - 1;
      } else {
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalPrice = state.totalPrice - existingItem.totalPrice;

        state.items = state.items.filter(
          (element) => element.id !== existingItem.id
        );
      }
    },

    removeItemFromCart(state, action) {
      const item = action.payload;

      state.totalQuantity = state.totalQuantity - item.quantity;
      state.totalPrice = state.totalPrice - item.totalPrice;
      state.items = state.items.filter((element) => element.id !== item.id);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
