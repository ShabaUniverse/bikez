import {configureStore} from '@reduxjs/toolkit';
import product from './slices/productSlice';
import category from './slices/categorySlice';
import sort from './slices/sortSlice';
import pagination from './slices/paginationSlice';
import bag from './slices/bagSlice';

const store = configureStore({
    reducer: {
        product,
        category,
        sort,
        pagination,
        bag
    }
});
export default store;