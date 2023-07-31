import React, { useState } from "react";

const ProductBox = ({ title, desc, price, sizes, imageUrl }) => {
  const [activeSize, setActiveSize] = useState(0);

  return (
    <div className="products-itself border border-white mt-2 ml-1 hover:border-yellow-400">
      <div className="product-box w-full h-64 pl-2 bg-white flex justify-between ">
        <div className="one pl-3 flex justify-center items-center">
          <img src={imageUrl} alt="" width="250px" />
        </div>

        <div className="two flex flex-col justify-between items-start py-4 w-64">
          <div className="title">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>

          <div className="desc">
            <p>{desc}</p>
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
                  onClick={() => setActiveSize(i)}>
                  {size}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="three py-4 px-3 flex flex-col justify-between items-end w-28">
          <div className="price">
            <p className="font-bold">$ {price}</p>
          </div>

          <div className="add">
            <p className=" w-8 h-8 bg-yellow-400 text-white flex justify-center items-center font-bold cursor-pointer hover:bg-yellow-500">
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
