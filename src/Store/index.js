import { configureStore } from "@reduxjs/toolkit";
import FoodItemsSlice from "./foodItemsSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
  reducer:{
    foodItems:FoodItemsSlice.reducer,
    cartItems:cartSlice.reducer,
  }
})

export default store