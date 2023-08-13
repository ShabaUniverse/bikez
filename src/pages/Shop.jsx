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
      <div className="shop-wrapper max-w-6xl mx-auto">
        <div className="shop-sides lg:grid lg:grid-cols-4">

          <div className="leftSide">
            {status === "succeeded" && <Categories />}
          </div>

          <div className="rightSide lg:col-span-3">
            {status === "succeeded" && <Sort />}
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
      {status === "succeeded" && <Footer />}
      
    </div>
  );
};

export default Shop;
