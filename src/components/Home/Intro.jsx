import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";
import "animate.css";



const Intro = () => {
  return (
    <div className="home-intro h-screen w-full home-grid justify-center items-center relative">
      <div className="home-link-to-shop black-lined-bg h-screen text-center flex flex-col justify-center items-center">
        <h2 className="text-white desc-font shadowing text-3xl uppercase  z-10">
          Adventure Awaits!
        </h2>
        <h2 className="text-yellow-400 desc-font shadowing text-3xl uppercase  z-10">
          Discover New Bikes
        </h2>
        <h2 className="text-white desc-font shadowing text-3xl uppercase z-10">
          in Our Shop!
        </h2>
        <br />
        <Link
          className="text-white py-2 px-6 rounded-3xl border-2 border-yellow-400 hover:bg-yellow-500 font-semibold z-10 animate-bounce"
          to="/shop"
        >
          Go to shop
        </Link>
      </div>
      <img
        src="/images/homeBikeTransparent.png"
        alt=""
        className="animate__animated animate__fadeInLeft w-96 h-96 absolute left-96"
      />
      
      <div className="another-one bg-[url(images/homewheel.jpg)] bg-cover bg-center h-screen flex flex-col justify-center items-center">
      </div>
    </div>
  );
};

export default Intro;
