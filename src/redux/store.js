import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
// import UserContext from "../utils/UserContext";

const Store= configureStore({
    reducer:{
        cart:cartSlice,
    }
});

export default Store