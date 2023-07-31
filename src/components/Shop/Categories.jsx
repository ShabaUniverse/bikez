import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import categorySlice, {
  categorySelector,
} from "../../data/slices/categorySlice";
import { setActiveCategory } from "../../data/slices/categorySlice";

const Categories = () => {
  const { activeCategory, categories } = useSelector(categorySelector);
  const dispatch = useDispatch();

  return (
    <div className="categories pt-20 px-5 bg-yellow-400 h-screen sticky top-0">
      <div className="categories-list flex flex-col justify-center h-full">
        {categories.map((category) => (
          <p
            className={
              category.id === activeCategory
                ? "text-white font-semibold cursor-pointer my-5"
                : "font-semibold cursor-pointer my-5"
            }
            key={category.id}
            onClick={() => dispatch(setActiveCategory(category.id))}>
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
