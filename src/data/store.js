import {configureStore} from '@reduxjs/toolkit';
import product from './slices/productSlice';
import category from './slices/categorySlice';

const store = configureStore({
    reducer: {
        product,
        category,
    }
});
export default store;