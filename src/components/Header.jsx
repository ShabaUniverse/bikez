import React, { useEffect } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { bagSelector } from "../data/slices/bagSlice";

const Header = () => {


  const {bagProducts} = useSelector(bagSelector);
  let avar = 0;
  let totalItemsInBag =  0;
  totalItemsInBag = bagProducts.map(item => item.count).reduce((acc, current) => acc + current, 0);
  
  useEffect(() => {
  }, [totalItemsInBag])



  return (
    <div className="header bg-slate-100 py-1 z-50 fixed w-full">
      <div className="header-container w-4/5 mx-auto">
        <div className="header-wrapper flex justify-between items-center">
          <div className="left">
            <div className="logo">
              <Link to="/" className="flex">
                <p className="logo-font text-4xl font-medium text-yellow-400">
                  BIKE
                </p>
                <span className="logo-font text-4xl font-medium text-stone-600">
                  Z
                </span>
              </Link>
            </div>
          </div>
          <div className="right flex">
            <div className="links">
              <Link to="/" className="font-semibold ml-3 hover:text-yellow-400">
                Blog
              </Link>
              <Link
                to="/shop"
                className="font-semibold ml-3 hover:text-yellow-400">
                Shop
              </Link>
              <Link
                to="/contact"
                className="font-semibold ml-3 hover:text-yellow-400">
                About
              </Link>
              <Link
                to="/about"
                className="font-semibold ml-3 hover:text-yellow-400">
                Contact
              </Link>
            </div>

            <div className="cart ml-4 flex">
              <Link to='/bag'>
                <svg
                  className="fill-yellow-400 cursor-pointer hover:fill-yellow-500"
                  viewBox="0 0 448 512"
                  width="25px"
                  height="25px"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" />
                </svg>
              </Link>
              <p className="font-semibold text-xs">{totalItemsInBag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
