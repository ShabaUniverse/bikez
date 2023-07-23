import React from "react";

const ProductBox = ({ data }) => {
  return (
    <div className="products-wrapper flex justify-center items-center">
      {data.map((item) => (
        <div className="product-box w-72 h-80 mx-5 bg-white">
          <div className="top flex justify-between items-center mx-3 mt-3">
            <div className="title font-semibold text-yellow-400">
              {item.title}
            </div>
            <div className="plus-button font-semibold bg-yellow-400 w-8 h-8 flex justify-center items-center rounded-lg text-lg cursor-pointer">
              +
            </div>
          </div>

          <div className="product-image flex justify-center items-center">
            <img src={item.imageUrl} alt="" width="265px" />
          </div>

          <div className="product-size">
            <div className="size-wrapper flex justify-center items-center bg-yellow-400 py-2">
              {item.sizes.map((size, i) => (
                <p
                  className="font-semibold bg-white w-9 flex justify-center mx-1"
                  key={i}>
                  {size}
                </p>
              ))}
            </div>
          </div>

          <div className="product-price flex justify-end items-center mt-2 mr-3">
            <p className="font-bold">$ {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductBox;
