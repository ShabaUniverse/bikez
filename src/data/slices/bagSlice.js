import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bagProducts: [],
  totalPrice: 0,
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setBagProducts(state, action) {
      let findIfAlreadyExists = state.bagProducts.find(
        (item) => item.id === action.payload.id,
      );
      if (findIfAlreadyExists) {
        findIfAlreadyExists.count++;
      } else {
        state.bagProducts.push({ ...action.payload, count: 1 });
      }
    },
    clearBag(state) {
      state.bagProducts = [];
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },

    // controling quantity
    plusProduct(state, action) {
      let determineProduct = state.bagProducts.find(
        (product) => product.id === action.payload.id,
      );
      if (determineProduct) {
        determineProduct.count += 1;
        state.totalPrice += determineProduct.price;
      }
    },
    minusProduct(state, action) {
      let determineProduct = state.bagProducts.find(
        (product) => product.id === action.payload.id,
        );
        if (determineProduct && determineProduct.count > 1) {
          determineProduct.count -= 1;
          state.totalPrice -= determineProduct.price;
      }

    },
  },
});

export const bagSelector = (state) => state.bag;
export const { setBagProducts, clearBag, setTotalPrice, plusProduct, minusProduct } =
  bagSlice.actions;
export default bagSlice.reducer;
