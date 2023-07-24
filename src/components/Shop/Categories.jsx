import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import categorySlice,  {categorySelector}  from "../../data/slices/categorySlice";
import { setActiveCategory } from "../../data/slices/categorySlice";

const Categories = () => {
  
  const { activeCategory, categories } = useSelector(categorySelector);
  const dispatch = useDispatch();


  return (
    <div className="categories pt-20 pb-10 bg-yellow-400">
      <div className="categories-container w-4/5 m-auto">
        <div className="categories-list flex justify-around items-center">
          {categories.map((category) => (
            <p
              className={
                category.id === activeCategory
                  ? "text-white font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer"
              }
              key={category.id}
              onClick={() => dispatch(setActiveCategory(category.id))}>
              {category.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
