import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get(
      "https://63d7d820afbba6b7c945b3e7.mockapi.io/bikes",
    );
    return data;
  },
);

const initialState = {
  products: null,
  status: "",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,

  reducers: {
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const productSelector = (state) => state.product;
export default productSlice.reducer;
