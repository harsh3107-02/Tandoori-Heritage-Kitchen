import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["Banan","Apple"]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        clear_card:(state)=>{
            state=[];
        },
        remove_Items:(state,payload)=>{
            state.items.pop()
        }
    }
})

export const {addItems,clear_card,remove_Items}=CartSlice.actions

export default CartSlice.reducer;