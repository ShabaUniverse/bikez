import React, { useState } from "react";

const ProductBox = ({ title, price, sizes, imageUrl }) => {

  const [activeSize, setActiveSize] = useState(0);
  
  return (
    <div className="products-wrapper flex justify-center items-center">
      <div className="product-box w-72 h-80 mx-5 bg-white">
        <div className="top flex justify-between items-center mx-3 mt-3">
          <div className="title font-semibold text-yellow-400">{title}</div>
          <div className="plus-button  font-lg bg-transparent w-8 h-8 flex justify-center border border-yellow-400 items-center rounded-lg text-lg cursor-pointer text-stone-600 hover:bg-yellow-400 hover:text-white">
            +
          </div>
        </div>

        <div className="product-image flex justify-center items-center">
          <img src={imageUrl} alt="" width="265px" />
        </div>

        <div className="product-size">
          <div className="size-wrapper flex justify-center items-center bg-yellow-400 py-2">
            {sizes.map((size, i) => (
              <p
                className={
                  activeSize === i
                    ? "font-lg bg-stone-600 w-9 flex justify-center items-center mx-1 text-white"
                    : "font-lg bg-white w-9 flex justify-center mx-1 cursor-pointer"
                }
                key={i}
                onClick={() => setActiveSize(i)}>
                {size}
              </p>
            ))}
          </div>
        </div>

        <div className="product-price flex justify-end items-center mt-2 mr-3">
          <p className="font-semibold">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
