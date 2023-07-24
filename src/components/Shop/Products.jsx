import React from "react";
import ProductBox from "./ProductBox";
import { useSelector } from "react-redux";
import { productSelector } from "../../data/slices/productSlice";

const Products = () => {
  const { products } = useSelector(productSelector);

  return (
    <div className="products">
      <div className="products-container w-4/5 mx-auto">
        <div className="products-wrapper mt-4 grid grid-cols-3 gap-y-14">
          {products.map((item) => (
            <ProductBox {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;