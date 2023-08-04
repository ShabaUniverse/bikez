import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSelector } from "../data/slices/bagSlice";
import { clearBag, setTotalPrice } from "../data/slices/bagSlice";
import BagTable from "../components/Bag/BagTable";
import BagProduct from "../components/Bag/BagProduct";
import BagBottom from "../components/Bag/BagBottom";

const Bag = () => {
  
  return (
    <div className="bag pt-12">
      <div className="bag-container w-4/5 mx-auto">
        <div className="bag-wrapper">
          <BagTable />
          <BagProduct />
          <BagBottom />
        </div>
      </div>
    </div>
  );
};

export default Bag;
