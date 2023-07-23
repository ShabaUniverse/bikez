import React from "react";
import ProductBox from "./ProductBox";

const Products = ({data}) => {
  return (
    <div className="products">
      <div className="products-container w-4/5 mx-auto">
        <div className="products-wrapper mt-4">
          <ProductBox data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
