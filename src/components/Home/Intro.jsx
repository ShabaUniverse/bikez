import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";
import "animate.css";

const Intro = () => {
  return (
    <div className="intro h-screen grid md:grid-cols-2 relative">
      <div className="home-link-to-shop black-lined-bg hidden md:flex flex-col justify-center items-center">
        <h2 className="text-white desc-font text-2xl shadowing z-20">
          Adventure Awaits!
        </h2>
        <h2 className="text-yellow-400 desc-font text-2xl shadowing z-20">
          Discover Bikes
        </h2>
        <h2 className="text-white desc-font text-2xl shadowing z-20">
          in Our Shop!
        </h2>
        <br />
        <Link
          className="text-white animate-bounce border-2 border-yellow-400 py-2 px-5 rounded-xl z-20"
          to="/shop">
          Go to shop
        </Link>
      </div>
      <img
        src="/images/homeBikeTransparent.png"
        alt=""
        className="animate__animated animate__fadeInLeft hidden md:flex absolute left-1/4 top-[10%] w-96"
      />

      <div className="bg-[url(/images/homewheel.jpg)] bg-cover bg-center flex justify-center items-center text-center">
        <div className="right-intro-text md:hidden">
          <h2 className="text-white desc-font text-2xl shadowing z-20">
            Adventure Awaits!
          </h2>
          <h2 className="text-yellow-400 desc-font text-2xl shadowing z-20">
            Discover Bikes
          </h2>
          <h2 className="text-white desc-font text-2xl shadowing z-20">
            in Our Shop!
          </h2>
          <br />
          <Link
            className="text-white animate-pulse border-2 border-yellow-400 py-2 px-5 rounded-xl z-20"
            to="/shop">
            Go to shop
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Intro;
