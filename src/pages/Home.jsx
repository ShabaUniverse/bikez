import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Home = () => {
  return (
    <div className="home">
        <div className="home-container">
          <div className="home-wrapper">
            <div className="home-desc-link bg-[url(images/home-img-1.jpg)] bg-cover bg-center h-screen w-full grid grid-cols-2 grid-rows-1 gap-1 justify-center items-center">
              <div className="home-desc text-white flex flex-col justify-center items-center">
                <h6 className="desc-font shadowing text-teal-400 text-4xl uppercase font-semibold">
                  Pedaling the Journey
                </h6>
                <h6 className="desc-font shadowing text-4xl uppercase font-semibold">
                  since 2005
                </h6>
                <h6 className="desc-font shadowing text-teal-400 text-3xl uppercase font-semibold">
                  Over 5000 Bikes Sold
                </h6>
                <h6 className="desc-font shadowing text-teal-400 text-3xl uppercase font-semibold">
                  and Counting!
                </h6>
                <h6 className="desc-font shadowing text-white text-3xl uppercase font-semibold">
                  Discover Freedom on Wheels
                </h6>
                <h6 className="desc-font shadowing text-white text-3xl uppercase font-semibold">
                  Join the Journey Today
                </h6>
              </div>

              <div className="home-link-to-shop text-center">
                <h2 className="text-white desc-font shadowing text-2xl uppercase font-semibold">
                  Adventure Awaits!
                </h2>
                <h2 className="text-teal-400 desc-font shadowing text-2xl uppercase font-semibold">
                  {" "}
                  Discover New Bikes{" "}
                </h2>
                <h2 className="text-white desc-font shadowing text-2xl uppercase font-semibold">
                  in Our Shop!
                </h2>
                <br />
                <Link
                  className="text-white py-2 px-6 rounded-xl bg-teal-400 hover:bg-teal-500 font-semibold"
                  to="/shop"
                >
                  Go to shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      <div className="home-another-one h-screen bg-cover bg-center bg-teal-400 bg-opacity-25 shadow-lg backdrop-blur-lg backdrop-contrast-lg border-1 border-white border-opacity-25 p-4"></div>
    </div>
  );
};

export default Home;
