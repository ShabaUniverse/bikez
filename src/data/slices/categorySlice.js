import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  categories: [
    { name: "All", id: 0 },
    { name: "Mountain", id: 1 },
    { name: "Road", id: 2 },
    { name: "Cross", id: 3 },
    { name: "Gravel", id: 4 },
    { name: "BMX", id: 5 },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const categorySelector = (state) => state.category;
export const { setActiveCategory } = categorySlice.actions;
export default categorySlice.reducer;
