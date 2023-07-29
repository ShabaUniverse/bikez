import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsPerPage: 8,
  currentPage: 1,
  currentProducts: [],
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCurrentProducts(state, action) {
      state.currentProducts = action.payload;
    },
  },
});

export const paginationSelector = (state) => state.pagination;
export const { setCurrentPage, setCurrentProducts } = paginationSlice.actions;
export default paginationSlice.reducer;
