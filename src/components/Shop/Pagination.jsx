import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../data/slices/productSlice";
import {
  paginationSelector,
  setCurrentPage,
  setCurrentProducts,
} from "../../data/slices/paginationSlice";
import { sortSelector } from "../../data/slices/sortSlice";

const Pagination = () => {
  const { products } = useSelector(productSelector);
  const { sortValue } = useSelector(sortSelector);
  const { currentPage, productsPerPage, currentProducts } =
    useSelector(paginationSelector);
  const dispatch = useDispatch();

  let lastIndex = currentPage * productsPerPage;
  let firstIndex = lastIndex - productsPerPage;
  let quantityOfPages = Math.ceil(products.length / productsPerPage);
  let preSetCurrentProducts = [];


  useEffect(() => {
    let sorted;
    if (sortValue === "price") {
      sorted = [...products].sort((a, b) => b.price - a.price);
    } else if (sortValue === "rating") {
      sorted = [...products].sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "name") {
      sorted  = [...products].sort((a, b) =>
        (a.title ?? "").localeCompare(b.title ?? ""),
      );
    } else {
      sorted = products;
    }
    preSetCurrentProducts = sorted.slice(firstIndex, lastIndex);
    dispatch(setCurrentProducts(preSetCurrentProducts));
  }, [sortValue, currentPage]);

  let pages = [];
  for (let i = 1; i <= quantityOfPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination my-6">
      <div className="pagination-container w-4/5 mx-auto">
        <div className="pagination-wrapper flex justify-center items-center">
          {pages.map((item, i) => (
            <p
              key={i}
              className={
                currentPage === item
                  ? "mx-2 border border-yellow-400 px-3 cursor-pointer bg-yellow-400 text-white"
                  : "mx-2 border border-yellow-400 px-3 cursor-pointer"
              }
              onClick={() => dispatch(setCurrentPage(item))}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
