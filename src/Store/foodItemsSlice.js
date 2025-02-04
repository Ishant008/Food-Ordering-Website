import { createSlice } from "@reduxjs/toolkit";
import FoodData from './FoodData'

const FoodItemsSlice = createSlice({
  name:"foodItems",
  initialState:FoodData,
  reducers:{
    categorySort:(state,action)=>{
      if(action.payload==="All"){
        return FoodData;
      } else {
        let sortItems = FoodData.filter(item=>(
          item.mealType===action.payload
        ))
        return sortItems;
      }
    },
    searchSort:(state,action)=>{
      return FoodData.filter(item=>(
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      ))
    }
  }
})

export const foodItemsActions = FoodItemsSlice.actions
export default FoodItemsSlice;