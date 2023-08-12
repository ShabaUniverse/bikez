import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bagSelector,
  minusProduct,
  plusProduct,
  removeProduct,
  setTotalPrice,
} from "../../data/slices/bagSlice";

const BagProduct = () => {
  const { bagProducts, totalPrice } = useSelector(bagSelector);
  const dispatch = useDispatch();

  const plusClick = (item) => {
    dispatch(plusProduct(item));
  };
  const minusClick = (item) => {
    dispatch(minusProduct(item));
  };

  const deleteProduct = (item) => {
    const itemIndex = bagProducts.findIndex(
      (product) => product.id === item.id && product.size === item.size,
    ); //finds index of products that matches id and size
    if (itemIndex !== -1) {
      // if it false then its -1, so if its true:
      const deletedItem = bagProducts[itemIndex]; // gets whole object by its index
      dispatch(removeProduct(itemIndex)); //sends index of products to redux
      const priceReduction = deletedItem.price * deletedItem.count; //it count the total price of selected item
      dispatch(setTotalPrice(totalPrice - priceReduction)); // sends the resulte of expression to redux
    }
  };

  return (
    <div className="bag-items-box">
      {bagProducts.map((item, index) => (
        <div className="bag-item flex mt-2 bg-white md:w-3/4 mx-auto" key={index}>
          <div className="title mt-2 flex flex-col font-semibold">
            <img src={item.imageUrl} alt="" className=" w-36" />
            <p className=" text-base text-center md:ml-2">{item.title}</p>
          </div>

          <div className="size w-1/5 font-semibold flex justify-center items-center">
            <p className="text-lg -translate-x-2/4">{item.size}</p>
          </div>

          <div className="quantity w-2/5 md:w-1/6 font-semibold flex justify-center items-center">
            <span
              className={
                item.count === 1
                  ? "px-3 text-xl bg-slate-100 border-r cursor-pointer"
                  : "px-3 text-xl bg-yellow-400 border-r cursor-pointer"
              }
              onClick={() => minusClick(item)}>
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

          <div className="remove w-1/6 font-semibold flex justify-center items-center text-2xl">
            <p className="cursor-pointer" onClick={() => deleteProduct(item)}>
              🗑
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BagProduct;
