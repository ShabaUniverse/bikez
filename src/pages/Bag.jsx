import React from "react";
import { useSelector } from "react-redux";
import { bagSelector } from "../data/slices/bagSlice";

const Bag = () => {
  const { bagProducts } = useSelector(bagSelector);

  return (
    <div className="bag pt-12">
      <div className="bag-container w-4/5 mx-auto">
        <div className="bag-wrapper">
          <div className="bag-explanation flex">
            <div className="w-3/6 border-l font-semibold border-gray-400 p-1 text-center">
              <p>item</p>
            </div>
            <div className="w-1/5 border-l font-semibold border-gray-400 p-1 text-center">
              <p>size</p>
            </div>
            <div className="w-2/5 border-l font-semibold border-gray-400 p-1 text-center">
              <p>quantity</p>
            </div>
            <div className="w-1/5 border-l font-semibold border-gray-400 p-1 text-center">
              <p>price</p>
            </div>
            <div className="w-1/5 border-l font-semibold border-gray-400 p-1 text-center">
              <p>remove</p>
            </div>
          </div>

          <div className="bag-items-box mt-3">
            {bagProducts.map((item) => (
              <div className="bag-item flex mt-2 bg-white" key={item.id}>
                <div className="title mt-2 px-5 flex justify-between items-center w-3/6 font-semibold">
                  <img src={item.imageUrl} alt="" className=" w-36" />
                  <p className=" text-lg">{item.title}</p>
                </div>

                <div className="size w-1/5 font-semibold flex justify-center items-center">
                  <p className=" text-lg">{item.size}</p>
                </div>

                <div className="quantity w-2/5 font-semibold flex justify-center items-center">
                  <span className="px-2 text-xl"> - </span>
                  <p className="px-2 text-xl"> 1 </p>
                  <span className="px-2 text-xl"> + </span>
                </div>

                <div className="price w-1/5 font-semibold flex justify-center items-center">
                  <p className=" text-lg">$ {item.price}</p>
                </div>

                <div className="remove w-1/5 font-semibold flex justify-center items-center text-2xl">
                  🗑
                </div>
              </div>
            ))}
          </div>

          <div className="payment w-full flex justify-end mt-3">
            <button className=" p-2 bg-yellow-400 rounded-md text-white">purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
