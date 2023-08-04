import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSelector, minusProduct, plusProduct } from "../../data/slices/bagSlice";

const BagProduct = () => {
  const { bagProducts } = useSelector(bagSelector);
  const dispatch = useDispatch();


  const plusClick = (item) => {
    dispatch(plusProduct(item));
  }
  const minusClick = (item) => {
    dispatch(minusProduct(item));
  }

  return (
    <div className="bag-items-box mt-3">
      {bagProducts.map((item) => (
        <div className="bag-item flex mt-2 bg-white" key={item.id}>
          <div className="title mt-2 px-5 flex justify-between items-center w-3/6 font-semibold">
            <img src={item.imageUrl} alt="" className="w-36" />
            <p className="text-lg">{item.title}</p>
          </div>

          <div className="size w-1/5 font-semibold flex justify-center items-center">
            <p className="text-lg -translate-x-2/4">{item.size}</p>
          </div>

          <div className="quantity w-2/5 font-semibold flex justify-center items-center">
            <span className="px-3 text-xl bg-yellow-400 border-r cursor-pointer" onClick={() => minusClick(item)}>
              -
            </span>
            <p className="px-3 text-xl bg-yellow-400"> {item.count} </p>
            <span
              className="px-3 text-xl bg-yellow-400 border-l cursor-pointer"
              onClick={() => plusClick(item)}>
              +
            </span>
          </div>

          <div className="price w-1/5 font-semibold flex justify-center items-center">
            <p className="text-lg">$ {item.price}</p>
          </div>

          <div className="remove w-1/5 font-semibold flex justify-center items-center text-2xl">
            <p className="cursor-pointer">🗑</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BagProduct;
