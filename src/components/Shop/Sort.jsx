import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortSelector } from "../../data/slices/sortSlice";
import { setSortValue } from "../../data/slices/sortSlice";

const Sort = () => {
  const { sortValue } = useSelector(sortSelector);
  const dispatch = useDispatch();

  const sortChange = (e) => {
    dispatch(setSortValue(e.target.value));
  };

  return (
    <div className="sort mt-3">
      <div className="sort-container w-4/5 mx-auto">
        <div className="sort-wrapper flex font-medium justify-end items-center">
          <p className="mr-2">Sort by:</p>
          <select
            className="px-1 font-medium text-left outline-none bg bg-slate-100"
            value={sortValue}
            onChange={(e) => sortChange(e)}>
            <option
              value="default"
              className="font-medium bg-stone-600 text-white checked:text-yellow-400">
              default
            </option>
            <option
              value="rating"
              className="font-medium bg-stone-600 text-white checked:text-yellow-400">
              rating
            </option>
            <option
              value="name"
              className="font-medium bg-stone-600 text-white checked:text-yellow-400">
              name
            </option>
            <option
              value="price"
              className="font-medium bg-stone-600 text-white checked:text-yellow-400">
              price
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
