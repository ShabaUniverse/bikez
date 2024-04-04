import React from "react";
import Geometry from "../components/Detailed/Geometry";
import Materials from "../components/Faq/Materials";

import Diagram from "/images/DiagramBike.png";
import RidingStyle from "../components/Faq/RidingStyle";

import "../styles/App.css";

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-container max-w-6xl mx-auto">
        <div className="faq-wrapper flex flex-col justify-center items-center">
          <div className="riding-style flex flex-col justify-center items-center pt-10">
            <h3 className="logo-font text-center font-bold text-3xl text-yellow-400">
              Riding Style
            </h3>

            <RidingStyle />
          </div>

          <div className="size">
            <h3 className=" logo-font text-center font-bold text-3xl text-yellow-400">
              Choose The Right Size
            </h3>

            <div className="faq">
              <Geometry />
            </div>
          </div>

          <div className="frame-materials flex flex-col justify-center items-center">
            <h3 className="logo-font text-center font-bold text-3xl text-yellow-400">
              Consider Frame Materials
            </h3>

            <p className="text-center w-[90%] lg:w-3/5 py-10 font-semibold">
              Rated on a 1-5 scale by the sage himself. With 1 being "best
              option for". Of course, there are many variables to consider when
              determining attributes of various frame materials
            </p>

            <div className="faq">
              <Materials />
            </div>
          </div>

          <div className="check-components">
            <h3 className=" logo-font text-center font-bold text-3xl text-yellow-400">
              Check Components
            </h3>

            <img src={Diagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
