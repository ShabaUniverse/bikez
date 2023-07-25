// import React from "react";
// import ProductBox from "./ProductBox";
// import { useSelector } from "react-redux";
// import { productSelector } from "../../data/slices/productSlice";
// import { categorySelector } from "../../data/slices/categorySlice";
// import { setSortValue, sortSelector } from "../../data/slices/sortSlice";

// const Products = () => {
//   const { products } = useSelector(productSelector);
//   const { activeCategory, categories } = useSelector(categorySelector);
//   const {sortValue} = useSelector(sortSelector);

//   let filteredProducts =
//     activeCategory > 0
//       ? products
//           .filter(
//             (item) =>
//               item.type.toLowerCase() ===
//               categories[activeCategory].name.toLowerCase(),
//           )
//           .map((item) => <ProductBox {...item} key={item.id} />)
//       : products.map((item) => <ProductBox {...item} key={item.id} />);

//   if (sortValue === "rating") {
//     filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
//   } else if (sortValue === "name") {
//     filteredProducts = filteredProducts.sort((a, b) =>
//       a.name.localeCompare(b.name),
//     );
//   }

//   return (
//     <div className="products">
//       <div className="products-container w-4/5 mx-auto">
//         <div className="products-wrapper mt-4 grid grid-cols-3 gap-y-14">
//           {filteredProducts}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from "react";
import ProductBox from "./ProductBox";
import { useSelector } from "react-redux";
import { productSelector } from "../../data/slices/productSlice";
import { categorySelector } from "../../data/slices/categorySlice";
import {  sortSelector } from "../../data/slices/sortSlice";

const Products = () => {
  const { products } = useSelector(productSelector);
  const { activeCategory, categories } = useSelector(categorySelector);
  const { sortValue } = useSelector(sortSelector);

  let filteredProducts =
    activeCategory > 0
      ? products.filter(
          (item) =>
            item.type.toLowerCase() ===
            categories[activeCategory].name.toLowerCase(),
        )
      : [...products];

  if (sortValue === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortValue === "name") {
    filteredProducts.sort((a, b) =>
      (a.title ?? "").localeCompare(b.title ?? ""),
    );
  } else if (sortValue === "price") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="products">
      <div className="products-container w-4/5 mx-auto">
        <div className="products-wrapper mt-4 grid grid-cols-3 gap-y-14">
          {filteredProducts.map((item) => (
            <ProductBox {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
