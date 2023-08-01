import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSelector } from "../data/slices/bagSlice";
import { clearBag, setTotalPrice } from "../data/slices/bagSlice";

const Bag = () => {
  const { bagProducts, totalPrice } = useSelector(bagSelector);
  const dispatch = useDispatch();

  const clearBagFunc = () => {
    if (window.confirm("Are you sure you want to delete bag?")) {
      dispatch(clearBag());
      dispatch(setTotalPrice(0))
    }
  };

  
  let gettingPrice = bagProducts.map(item => item.price).reduce((acc, current) => acc + current, 0);
  
  useEffect(() => {
    dispatch(setTotalPrice(gettingPrice));
  }, [totalPrice])


  return (
    <div className="bag pt-12">
      <div className="bag-container w-4/5 mx-auto">
        {bagProducts.length > 0 ? (
          <div className="bag-wrapper">
            <div className="bag-explanation flex bg-yellow-400">
              <div className="w-3/6 border-l font-semibold border-stone-600 p-1 text-center">
                <p>item</p>
              </div>
              <div className="w-1/5 border-l font-semibold border-stone-600 p-1 text-center">
                <p>size</p>
              </div>
              <div className="w-2/5 border-l font-semibold border-stone-600 p-1 text-center">
                <p>quantity</p>
              </div>
              <div className="w-1/5 border-l font-semibold border-stone-600 p-1 text-center">
                <p>price</p>
              </div>
              <div className="w-1/5 border-l border-r font-semibold border-stone-600 p-1 text-center">
                <p>remove</p>
              </div>
            </div>

            <div className="bag-items-box mt-3">
              {bagProducts.map((item) => (
                <div className="bag-item flex mt-2 bg-white" key={item.id}>
                  <div className="title mt-2 px-5 flex justify-between items-center w-3/6 font-semibold">
                    <img src={item.imageUrl} alt="" className="w-36" />
                    <p className="text-lg">{item.title}</p>
                  </div>

                  <div className="size w-1/5 font-semibold flex justify-center items-center">
                    <p className="text-lg">{item.size}</p>
                  </div>

                  <div className="quantity w-2/5 font-semibold flex justify-center items-center">
                    <span className="px-3 text-xl bg-yellow-400 border-r cursor-pointer">
                      {" "}
                      -{" "}
                    </span>
                    <p className="px-3 text-xl bg-yellow-400"> 1 </p>
                    <span className="px-3 text-xl bg-yellow-400 border-l cursor-pointer">
                      {" "}
                      +{" "}
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

            <div className="payment w-full flex flex-col items-end mt-3">
              <div className="total-price-section">
                <p>$ {totalPrice}</p>
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
          </div>
        ) : (
          <div className="h-screen top-0 left-2/4 -translate-x-1/2 absolute flex justify-center items-center">
            <p className="font-bold text-xl uppercase">no items in bag</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
