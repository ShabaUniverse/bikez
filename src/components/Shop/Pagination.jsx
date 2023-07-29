import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../data/slices/productSlice";
import {
  paginationSelector,
  setCurrentPage,
  setCurrentProducts,
} from "../../data/slices/paginationSlice";

const Pagination = () => {
  const { products } = useSelector(productSelector);
  const { currentPage, productsPerPage, currentProducts } = useSelector(paginationSelector);
  const dispatch = useDispatch();

  let lastIndex = currentPage * productsPerPage;
  let firstIndex = lastIndex - productsPerPage;
  let quantityOfPages = Math.ceil(products.length / productsPerPage);
  let preSetCurrentProducts = [];

  preSetCurrentProducts = products.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(setCurrentProducts(preSetCurrentProducts));
  }, [currentPage]);

  useEffect(() => {    //created this effect to log it once.
    console.log(currentProducts);
  }, [currentProducts])

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
