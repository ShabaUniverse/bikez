import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../components/Shop/Categories";
import Products from "../components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../data/slices/productSlice";
import categorySlice, { categorySelector } from "../data/slices/categorySlice";
import Sort from "../components/Shop/Sort";
import { sortSelector } from "../data/slices/sortSlice";
import { fetchProducts } from "../data/slices/productSlice";
import Loading from "../components/Loading";
import FetchError from "../components/FetchError";

const Shop = () => {
  const { products, status } = useSelector(productSelector);

  const { activeCategory } = useSelector(categorySelector);
  const { sortValue } = useSelector(sortSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [activeCategory, sortValue]);

  return (
    <div className="shop">
      <div className="shop-wrapper">
        <Categories />
        <Sort />
        {status === 'loading' && <Loading />}
        {status === 'succeeded' && <Products />}
        {status === 'failed' && <FetchError/>}
      </div>
    </div>
  );
};

export default Shop;
