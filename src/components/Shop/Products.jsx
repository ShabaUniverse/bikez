import React from "react";
import ProductBox from "./ProductBox";
import { useSelector } from "react-redux";
import { productSelector } from "../../data/slices/productSlice";
import { categorySelector } from "../../data/slices/categorySlice";

const Products = () => {
  const { products } = useSelector(productSelector);
  const { activeCategory, categories } = useSelector(categorySelector);

  return (
    <div className="products">
      <div className="products-container w-4/5 mx-auto">
        <div className="products-wrapper mt-4 grid grid-cols-3 gap-y-14">
          {activeCategory > 0
            ? products
                .filter((item) => item.type.toLowerCase() === categories[activeCategory].name.toLowerCase())
                .map((item) => <ProductBox {...item} key={item.id} />)
            : products.map((item) => <ProductBox {...item} key={item.id} />)}

          {/* {products.map((item) => (
            <ProductBox {...item} key={item.id} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
