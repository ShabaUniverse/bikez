import React from "react";
import Geometry from "../components/Detailed/Geometry";
import Materials from "../components/Faq/Materials";

import Diagram from "../../public/images/DiagramBike.png";
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

          <div className="frame-materials">
            <h3 className="logo-font text-center font-bold text-3xl text-yellow-400">
              Consider Frame Materials
            </h3>

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
