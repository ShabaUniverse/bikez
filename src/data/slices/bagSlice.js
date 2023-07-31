import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bagProducts: [],
}

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        setBagProducts(state, action){
            state.bagProducts.push(action.payload);
        }
    }
})

export const bagSelector = (state) => state.bag;
export const { setBagProducts } = bagSlice.actions;
export default bagSlice.reducer;
