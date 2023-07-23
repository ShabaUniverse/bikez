import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: 0,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setActiveCategory(state, action){
            state.activeCategory = action.payload;
        }
    }
})

export const categorySelector = (state) => state.category;
export const {setActiveCategory} = categorySlice.actions;
export default categorySlice.reducer;

