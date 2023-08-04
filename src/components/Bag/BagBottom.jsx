import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSelector } from "../../data/slices/bagSlice";
import { setTotalPrice, clearBag } from "../../data/slices/bagSlice";
import { useEffect } from "react";
const BagBottom = () => {
  const { totalPrice, bagProducts } = useSelector(bagSelector);
  const dispatch = useDispatch();

  const clearBagFunc = () => {
    if (window.confirm("Are you sure you want to delete bag?")) {
      dispatch(clearBag());
      dispatch(setTotalPrice(0));
    }
  };

  let gettingPrice = bagProducts
    .map((item) => item.price)
    .reduce((acc, current) => acc + current, 0);

  useEffect(() => {
    dispatch(setTotalPrice(gettingPrice));
  }, []);

  return (
    <div className="payment w-full flex flex-col items-end mt-3">
      <div className="total-price-section">
        <p className=" text-xl font-semibold text-red-500">$ {totalPrice}</p>
      </div>

      <div className="buttons my-3">
        <button
          className="p-2 bg-red-500 rounded-md text-white mr-1"
          onClick={() => clearBagFunc()}>
          clear bag
        </button>
        <button className="p-2 bg-yellow-400 rounded-md text-white">
          purchase
        </button>
      </div>
    </div>
  );
};

export default BagBottom;
