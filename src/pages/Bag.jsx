import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bagSelector } from "../data/slices/bagSlice";
import BagProduct from "../components/Bag/BagProduct";
import BagBottom from "../components/Bag/BagBottom";
import { useLocation } from "react-router-dom";

const Bag = () => {
  const { bagProducts } = useSelector(bagSelector);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location.pathname]);


  return (
    <div className="bag p-2">
      <div className="bag-container mx-auto">
        {bagProducts.length > 0 ? (
          <div className="bag-wrapper">
            <BagProduct />
            <BagBottom />
          </div>
        ) : (
          <div className=" h-screen absolute top-0 left-2/4 -translate-x-2/4  flex justify-center items-center">
            <p className="text-lg font-semibold">No items in bag yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
