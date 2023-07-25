import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../components/Shop/Categories";
import Products from "../components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../data/slices/productSlice";
import { setProducts } from "../data/slices/productSlice";
import categorySlice, { categorySelector } from "../data/slices/categorySlice";
import Sort from "../components/Shop/Sort";
import { sortSelector } from "../data/slices/sortSlice";

const Shop = () => {
  const { products } = useSelector(productSelector);
  const { activeCategory } = useSelector(categorySelector);
  const { sortValue } = useSelector(sortSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://63d7d820afbba6b7c945b3e7.mockapi.io/bikes")
      .then((res) => {
        dispatch(setProducts(res.data));
        console.log('re-rendered');
      });
  }, [activeCategory, sortValue]);

  return (
    <div className="shop">
      <div className="shop-wrapper">
        <Categories />
        <Sort />
        {products && <Products />}
      </div>
    </div>
  );
};

export default Shop;
