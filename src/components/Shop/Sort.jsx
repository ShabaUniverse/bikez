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
        <div className="sort-wrapper flex font-semibold">
          <p className="mr-2">Sort by</p>
          <select
            className="font-semibold px-3"
            value={sortValue}
            onChange={(e) => sortChange(e)}>
            <option value="default" className="font-semibold">
              default
            </option>
            <option value="rating" className="font-semibold">
              rating
            </option>
            <option value="name" className="font-semibold">
              name
            </option>
            <option value="price" className="font-semibold">
              price
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
