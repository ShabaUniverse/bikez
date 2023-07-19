import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

// bg-[url(images/home-img-1.png)] bg-cover bg-center

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-wrapper">
          <div className="home-welcome h-screen w-full grid grid-cols-2 justify-center items-center relative">
            <div className="home-link-to-shop black-lined-bg h-screen text-center flex flex-col justify-center items-center">
              <h2 className="text-white desc-font shadowing text-2xl uppercase  z-10">
                Adventure Awaits!
              </h2>
              <h2 className="text-teal-400 desc-font shadowing text-2xl uppercase  z-10">
                Discover New Bikes
              </h2>
              <h2 className="text-white desc-font shadowing text-2xl uppercase z-10">
                in Our Shop!
              </h2>
              <br />
              <Link
                className="text-white py-2 px-6 rounded-xl bg-teal-400 hover:bg-teal-500 font-semibold z-10"
                to="/shop"
              >
                Go to shop
              </Link>
            </div>
              <img src="/images/home-img-1.png" alt="" className="w-96 h-96 absolute left-96"/>
            <div className="another-one bg-teal-400 h-screen flex flex-col justify-center items-center">
              <h2 className="text-white text-2xl z-10 louis-font">Pedaling The Journey</h2>
              <h2 className="text-white text-xl z-10 louis-font">since 2003</h2>
              <h2 className="text-white text-2xl z-10 louis-font">Over 5000 Bikes Sold</h2>
              <h2 className="text-white text-xl z-10 louis-font">and counting</h2>
              <h2 className="text-stone-600 text-xl z-10 louis-font">Discover Freedom On Wheels</h2>
              <h2 className="text-stone-600 text-xl z-10 louis-font">Join The Journey Today</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="home-another-one h-screen bg-cover bg-center bg-teal-400 bg-opacity-25 shadow-lg backdrop-blur-lg backdrop-contrast-lg border-1 border-white border-opacity-25 p-4"></div>
    </div>
  );
};

export default Home;
