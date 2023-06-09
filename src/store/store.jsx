import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import totalPriceSlice from "./totalPriceSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice,
        totalPrice: totalPriceSlice
       
    }
})


export default store;