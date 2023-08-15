import React from "react";
import "../styles/App.css";
import Footer from "../components/Footer";

const Service = () => {
  return (
    <div className="service relative">
      {/* service page title */}
      <div className="service-title relative overflow-hidden h-[80vh] ">
        <div className="bg-[url(/images/serviceBg.jpg)] bg-center bg-cover h-full w-full flex flex-col justify-center items-center after:content after:h-[100px] after:w-[200%] after:absolute after:left-[-100px] after:bottom-0 md:after:bottom-[-10px] after:bg-slate-100 after:transform after:translate-y-[80px] after:rotate-[6deg] md:after:rotate-[3deg] after:border-8 after:border-yellow-400">
          <h2 className="desc-font text-3xl text-white font-semibold">
            Pedal Perfect
          </h2>
          <h3 className="desc-font text-xl text-white font-medium">
            Expert Bicycle Service and Repairs
          </h3>
        </div>
      </div>

      <div className="other-one h-[60vh] flex-justify-between pt-10">
        <div className="container max-w-6xl mx-auto flex justify-center items-center">
          <h2>Service Out</h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
