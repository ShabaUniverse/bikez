import React from "react";
import Categories from "../components/Shop/Categories";
import Products from "../components/Shop/Products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-wrapper">
        <Categories />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
