import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container w-4/5 mx-auto">
        <div className="home-wrapper">
          <div className="home-desc-link bg-[url(images/home-img-1.jpg)] bg-cover bg-center h-screen w-full absolute top-0 left-0 grid grid-cols-2 grid-rows-1 gap-1 justify-center items-center">
            <div className="home-desc text-white flex flex-col justify-center items-center">
                <h6 className="desc-font shadowing text-teal-400 text-3xl uppercase font-semibold">Pedaling the Journey</h6>
                <h6 className="desc-font shadowing text-2xl uppercase font-semibold">since 2005</h6>
                <h6 className="desc-font shadowing text-teal-400 text-3xl uppercase font-semibold">Over 5000 Bikes Sold</h6>
                <h6 className="desc-font shadowing text-teal-400 text-3xl uppercase font-semibold">and Counting!</h6>
                <h6 className="desc-font shadowing text-white text-2xl uppercase font-semibold">Discover Freedom on Wheels</h6>
                <h6 className="desc-font shadowing text-white text-2xl uppercase font-semibold">Join the Journey Today</h6>
            </div>

            <div className="home-link-to-shop text-center">
                <h2 className="text-white desc-font shadowing text-2xl uppercase font-semibold">Adventure Awaits!</h2>
                <h2 className="text-teal-400 desc-font shadowing text-2xl uppercase font-semibold"> Discover New Bikes </h2>
                <h2 className="text-white desc-font shadowing text-2xl uppercase font-semibold">in Our Shop!</h2>
                <br />
                <Link className="text-white py-2 px-6 rounded-xl bg-teal-400 hover:bg-teal-500 font-semibold" to='/shop'>Go to shop</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
