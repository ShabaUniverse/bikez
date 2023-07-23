import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: null,
}
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        },
    } 
});

export const productSelector = (state) => state.product;
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;