import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const totalPriceSlice = createSlice({
    name:"totalPrice",
    initialState,
    reducers:{
        updateTotalPrice:(state, action)=>{
            const items = action.payload;
            state = items.reduce((total, item) => total + item.price, 0);
            return state;
        },
        removeItemPrice: (state, action) => {
            const itemPrice = action.payload;
            state -= itemPrice;
    }
}
})
export const { updateTotalPrice, removeItemPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;