import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortValue: 'default'
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortValue(state, action){
            state.sortValue = action.payload;
        }
    }
})

export const sortSelector = (state) => state.sort;
export const {setSortValue} = sortSlice.actions;
export default sortSlice.reducer;
