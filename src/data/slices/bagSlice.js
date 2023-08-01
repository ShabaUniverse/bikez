import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bagProducts: [],
    totalPrice: 0,
}

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        setBagProducts(state, action){
            state.bagProducts.push(action.payload);
        },
        clearBag(state){
            state.bagProducts = []
        },
        setTotalPrice(state, action){
            state.totalPrice = action.payload;
        }
    }
})

export const bagSelector = (state) => state.bag;
export const { setBagProducts, clearBag, setTotalPrice } = bagSlice.actions;
export default bagSlice.reducer;
