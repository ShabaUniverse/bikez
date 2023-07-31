import React, { useEffect } from "react";
import ProductBox from "./ProductBox";
import { useSelector } from "react-redux";
import { productSelector } from "../../data/slices/productSlice";
import { categorySelector } from "../../data/slices/categorySlice";
import { sortSelector } from "../../data/slices/sortSlice";
import { paginationSelector } from "../../data/slices/paginationSlice";


const Products = () => {
  const { products } = useSelector(productSelector);
  const { activeCategory, categories } = useSelector(categorySelector);
  const { sortValue } = useSelector(sortSelector);

  const {currentProducts} = useSelector(paginationSelector);

  let filteredProducts =
    activeCategory > 0
      ? products.filter(
          (item) =>
            item.type.toLowerCase() ===
            categories[activeCategory].name.toLowerCase(),
        )
      : [...currentProducts];

  if (sortValue === "rating" && activeCategory > 0) {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortValue === "name" && activeCategory > 0) {
    filteredProducts.sort((a, b) =>
      (a.title ?? "").localeCompare(b.title ?? ""),
    );
  } else if (sortValue === "price" && activeCategory > 0) {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="products">
      <div className="products-container w-4/5 mx-auto">
        <div className="products-wrapper mt-4 grid grid-cols-3 gap-y-14">
          {
            filteredProducts.map((item) => (
              <ProductBox {...item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
