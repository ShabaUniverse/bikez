import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";
import "animate.css";

const Intro = () => {
  return (
    <div className="intro h-[80vh] relative intro-chains">
      <div className="container max-w-5xl mx-auto flex justify-center md:justify-start h-full ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-white logo-font text-3xl shadowing z-20">
            Adventure Awaits!
          </h2>
          <h2 className="text-yellow-400 logo-font text-3xl shadowing z-20">
            Discover Bikes
          </h2>
          <h2 className="text-white logo-font text-3xl shadowing z-20">
            in Our Shop!
          </h2>
          <br />
          <Link
            className="text-yellow-400 logo-font text-lg animate-bounce border-2 border-yellow-400 py-2 px-5 rounded-xl z-20"
            to="/shop">
            Go to shop
          </Link>
        </div>
        <img
          src="/images/homeBikeTransparent.png"
          alt=""
          className="animate__animated animate__fadeInLeft hidden md:flex absolute left-2/4 top-[10%] w-96"
        />
      </div>
    </div>
  );
};

export default Intro;
