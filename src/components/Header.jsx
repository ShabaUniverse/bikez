import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { bagSelector } from "../data/slices/bagSlice";

const Header = () => {
  const { bagProducts } = useSelector(bagSelector);

  const [navDisplay, setNavDisplay] = useState(false);

  const handleNav = () => {
    setNavDisplay(!navDisplay);
  };

  let avar = 0;
  let totalItemsInBag = 0;
  totalItemsInBag = bagProducts
    .map((item) => item.count)
    .reduce((acc, current) => acc + current, 0);

  useEffect(() => {}, [totalItemsInBag]);

  return (
    <div className="header bg-stone-600">
      <div className="header-container max-w-6xl mx-auto">
        <div className="header-wrapper flex justify-between items-center w-full px-2 lg:p-0">
          {/* Nav Mobile */}
          <div
            className={
              navDisplay
                ? "navbar w-1/2 p-2 h-screen fixed left-0 top-0 bg-stone-600 z-50 duration-500"
                : "fixed left-[-100%]"
            }>
            <Link to="/" className="flex">
              <p className="logo-font text-4xl font-medium text-yellow-400 ">
                BIKE
              </p>
              <span className="logo-font text-4xl font-medium text-white">
                Z
              </span>
            </Link>

            <div className="flex flex-col">
              <Link
                to="/"
                className="mt-5 text-white font-semibold hover:text-yellow-400">
                Home
              </Link>
              <Link
                to="/shop"
                className="mt-5 text-white font-semibold hover:text-yellow-400">
                Shop
              </Link>
              <Link
                to="/service"
                className="mt-5 text-white font-semibold hover:text-yellow-400">
                Service
              </Link>
            </div>

            <div className="suggestions mt-5 flex flex-col">
              <Link className="text-yellow-400 font-medium mt-3 hover:text-white">
                Identify your riding style
              </Link>
              <Link className="text-yellow-400 font-medium mt-3 hover:text-white">
                Choose the right size
              </Link>
              <Link className="text-yellow-400 font-medium mt-3 hover:text-white">
                Consider frame materials
              </Link>
              <Link className="text-yellow-400 font-medium mt-3 hover:text-white">
                Check Components
              </Link>
            </div>
          </div>
          {/* End of nav Mobile */}

          <div className="left">
            <div className="logo">
              <Link to="/" className="flex">
                <p className="logo-font text-4xl font-medium text-yellow-400 ">
                  BIKE
                </p>
                <span className="logo-font text-4xl font-medium text-white">
                  Z
                </span>
              </Link>
            </div>
          </div>

          {/* Large Nav Links */}
          <div className="right hidden lg:flex">
            <div className="links flex justify-center items-center">
              <Link
                to="/"
                className=" mr-2 text-white font-semibold hover:text-yellow-400">
                Home
              </Link>
              <Link
                to="/shop"
                className=" mr-2 text-white font-semibold hover:text-yellow-400">
                Shop
              </Link>
              <Link
                to="/service"
                className=" mr-2 text-white font-semibold hover:text-yellow-400">
                Service
              </Link>
            </div>

            <div className="cart flex">
              <Link to="/bag">
                <svg
                  className="fill-yellow-400 cursor-pointer hover:fill-yellow-500"
                  viewBox="0 0 448 512"
                  width="25px"
                  height="25px"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" />
                </svg>
              </Link>
              <p className="font-semibold text-xs text-white">
                {totalItemsInBag}
              </p>
            </div>
          </div>

          {/* End of large nav Links */}

          {/* Ham menu */}
          <div className="right-mobile lg:hidden">
            {navDisplay ? (
              <svg
                className="fill-yellow-400"
                onClick={handleNav}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="25"
                height="25"
                viewBox="0 0 122.878 122.88"
                enable-background="new 0 0 122.878 122.88"
                xml:space="preserve">
                <g>
                  <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                </g>
              </svg>
            ) : (
              <svg
                className=" fill-yellow-400"
                onClick={handleNav}
                version="1.1"
                viewBox="0 0 32 32"
                width="30px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
              </svg>
            )}
          </div>
          {/* end of ham menu */}
        </div>

        {/* Sub Header */}
        <div className="sub-header hidden lg:flex">
          <div className="left w-1/4 py-3">
            <p className="text-white font-semibold text-xs">
              Your Journey, Our Wheels.
            </p>
          </div>

          <div className="right w-3/4 bg-yellow-400 py-2 px-2 absolute right-0 rounded-tl-lg">
            <div className="links flex justify-start items-center">
              <Link className="font-semibold underline mr-6 hover:text-white">
                Identify your riding style
              </Link>
              <Link className="font-semibold underline mr-6 hover:text-white">
                Choose the right size
              </Link>
              <Link className="font-semibold underline mr-6 hover:text-white">
                Consider frame materials
              </Link>
              <Link className="font-semibold underline hover:text-white">
                Check Components
              </Link>
            </div>
          </div>
        </div>
        {/* Sub header End */}
      </div>
    </div>
  );
};

export default Header;
