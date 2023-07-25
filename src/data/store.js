import {configureStore} from '@reduxjs/toolkit';
import product from './slices/productSlice';
import category from './slices/categorySlice';
import sort from './slices/sortSlice';

const store = configureStore({
    reducer: {
        product,
        category,
        sort
    }
});
export default store;