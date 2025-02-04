import  { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cartItems",
  initialState:[],
  reducers:{
    addItem:(state,action)=>{
      let newItems;
      let existItem=state.find(item=>(item.id===action.payload.id))
      if(existItem){
          newItems = state.map(item=>(
          item.id===existItem.id?{...existItem,qty:existItem.qty+1}:item))
          return newItems
      }else{
        newItems= [{...action.payload,qty:1},...state];
        return newItems
      }
    },
    removeItem:(state,action)=>{
      let newItems = state.filter(item=>item.id!==action.payload);
      return newItems
    },
    qtyIncrement:(state,action)=>{
      let newItems = state.map(item=>(
        item.id===action.payload.id?{...action.payload,qty:action.payload.qty+1}:item))
        return newItems
    },
    qtyDecrement:(state,action)=>{
      let newItems;
      if(action.payload.qty===1){
        newItems = state.filter(item=>item.id!==action.payload.id);
      return newItems
      }else{
          newItems = state.map(item=>(
          item.id===action.payload.id?{...action.payload,qty:action.payload.qty-1}:item))
          return newItems;
      }
    },
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;