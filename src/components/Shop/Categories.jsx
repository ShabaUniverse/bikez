import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import categorySlice, {
  categorySelector,
} from "../../data/slices/categorySlice";
import { setActiveCategory } from "../../data/slices/categorySlice";

import "../../styles/App.css";

const Categories = () => {
  const { activeCategory, categories } = useSelector(categorySelector);
  const [showCategory, setShowCategory] = useState(false);
  const dispatch = useDispatch();

  const handleCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className="categories h-full w-full">
      <div className="animate__animated animate__fadeInLeft sticky top-0 hidden bg-yellow-400 lg:flex lg:h-screen">
        <div className="categories-list flex flex-col justify-center pl-10">
          {categories.map((category) => (
            <p
              className={
                category.id === activeCategory
                  ? "text-white font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer py-5"
              }
              key={category.id}
              onClick={() => dispatch(setActiveCategory(category.id))}>
              {category.name}
            </p>
          ))}
        </div>
      </div>

      <div className="mobile-category px-3 py-3 flex flex-col justify-center items-center relative lg:hidden">
        <div
          className="control flex justify-center items-center rounded-xl py-2 bg-yellow-400 w-52 cursor-pointer"
          onClick={handleCategory}>
          <p className="font-semibold mr-2">
            {categories[activeCategory].name}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="10px"
            height="10px"
            viewBox="0 0 122.88 80.593"
            enableBackground="new 0 0 122.88 80.593"
            xmlSpace="preserve">
            <g>
              <polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" />
            </g>
          </svg>
        </div>

        <div
          className={
            !showCategory
              ? "categories-list hidden"
              : "flex flex-col absolute top-14 z-20 bg-yellow-400 rounded-xl px-2 py-3 w-52"
          }>
          {categories.map((category) => (
            <p
              className={
                category.id === activeCategory
                  ? "text-white font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer py-2"
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
