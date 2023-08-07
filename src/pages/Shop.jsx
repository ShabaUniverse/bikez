import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../styles/App.css";

import Products from "../components/Shop/Products";
import Categories from "../components/Shop/Categories";
import Sort from "../components/Shop/Sort";
import Loading from "../components/Loading";
import FetchError from "../components/FetchError";

import categorySlice, { categorySelector } from "../data/slices/categorySlice";
import { productSelector } from "../data/slices/productSlice";
import { sortSelector } from "../data/slices/sortSlice";
import { fetchProducts } from "../data/slices/productSlice";
import Pagination from "../components/Shop/Pagination";
import { paginationSelector } from "../data/slices/paginationSlice";
import { setCurrentProducts } from "../data/slices/paginationSlice";
import Footer from "../components/Footer";

const Shop = () => {
  const { currentProducts } = useSelector(paginationSelector);
  const { products, status } = useSelector(productSelector);
  const { activeCategory } = useSelector(categorySelector);
  const { sortValue } = useSelector(sortSelector);
  const dispatch = useDispatch();

  let filteredProducts = [];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [activeCategory, sortValue]);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location.pathname]);

  return (
    <div className="shop">
      <div className="shop-wrapper w-4/5 mx-auto">
        <div className="shop-sides shop-grid">
          <div className="leftSide">
            <Categories />
          </div>

          <div className="rightSide">
            <Sort />
            {status === "loading" && <Loading />}
            {status === "succeeded" && (
              <Products filteredProducts={filteredProducts} />
            )}
            {status === "failed" && <FetchError />}
          </div>
        </div>

        {status === "succeeded" && activeCategory === 0 && (
          <Pagination filteredProducts={filteredProducts} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
