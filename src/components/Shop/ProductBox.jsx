import React, { useState } from "react";
import { bagSelector, setBagProducts } from "../../data/slices/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductBox = ({ title, desc, price, sizes, imageUrl, type, id }) => {
  const [activeSize, setActiveSize] = useState(0);
  const { bagProducts } = useSelector(bagSelector);
  const dispatch = useDispatch();

  let wholeItem = {
    id,
    title,
    desc,
    price,
    size: sizes[activeSize],
    imageUrl,
    type,
  };

  const addToBag = () => {
    dispatch(setBagProducts(wholeItem));
  };

  const handleSizeClick = (event, index) => {
    event.stopPropagation(); // Prevent event propagation to parent elements
    setActiveSize(index);
  };

  return (
    <div className="products-itself border border-white mt-2 ml-3 hover:border-yellow-400">
      <div className="product-box flex justify-between bg-white">
        <div className="left flex w-full ">
          <div className="one pl-3">
            <img src={imageUrl} alt="" width="250px" />
          </div>

          <div className="two flex flex-col justify-between items-start py-4 pl-2">
            <div className="title">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            <div className="desc">
              <p>{type}</p>
            </div>

            <div className="size">
              <div className="size-wrapper flex">
                {sizes.map((size, i) => (
                  <p
                    className={
                      activeSize === i
                        ? "font-lg bg-stone-600 w-9 flex justify-center items-center mx-1 text-white cursor-pointer"
                        : "font-lg bg-white w-9 flex justify-center mx-1 cursor-pointer"
                    }
                    key={i}
                    onClick={(event) => handleSizeClick(event, i)}>
                    {size}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="right w-1/4 py-4 px-3 flex flex-col justify-between items-end">
          <div className="price">
            <p className="font-bold">$ {price}</p>
          </div>

          <div className="add flex">
            <Link to={`/shop/product/${id}`} className="mr-2 font-semibold text-white flex justify-center items-center h-8 w-24 bg-yellow-400 hover:bg-yellow-500">view more</Link>
            <p
              className=" w-8 h-8 bg-yellow-400 text-white flex justify-center items-center font-bold cursor-pointer hover:bg-yellow-500"
              onClick={() => addToBag()}>
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
