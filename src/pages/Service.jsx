import React from "react";
import "../styles/App.css";

const Service = () => {
  return (
    <div className="service pt-20">
      <div className="service-container">
        <div className="service-wrapper">
          <div className="first-service service-grid h-96 bg-yellow-400">
            <div className="image-part h-full w-full overflow-hidden">
              <div className="moving-image  bg-[url(images/bikeTesting.jpg)] bg-cover bg-center h-full w-full"></div>
            </div>
            <div className="desc-part flex flex-col justify-center items-center">
              <h2 className=" w-1/3 text-center font-semibold text-2xl text-white desc-font">
                Bicycle Scanning and Setting
              </h2>
              <p className=" w-2/3 text-center font-medium text-xl desc-font">
                Enhancing Performance and Safety. Regular scanning helps you
                predict potential risks and adjust your cycling strategy
                accordingly. This can include preparing for turns, stops, or
                changes in road conditions.
              </p>
              <button className=" px-8 py-2 border border-stone-600 rounded-2xl text-white"> Go </button>
            </div>
          </div>

          <div className="second-service service-grid h-96 bg-stone-600">
            <div className="desc-part flex flex-col justify-center items-center">
              <h2 className=" w-1/3 text-center font-semibold text-2xl text-white desc-font">
                Your Bicycle Tire Fitting Experts
              </h2>
              <p className=" w-2/3 text-center font-medium text-yellow-400 text-xl desc-font">
                Our tire fitting service is prompt and efficient, ensuring that
                you get back on the road quickly with perfectly fitted tires.
              </p>
              <button className=" px-8 py-2 border border-yellow-400 rounded-2xl text-white"> Go </button>
            </div>
            <div className="image-part h-full w-full overflow-hidden">
              <div className="moving-image  bg-[url(images/bikeTires.jpg)] bg-cover bg-center h-full w-full"></div>
            </div>
          </div>

          <div className="first-service service-grid h-96 bg-yellow-400 ">
            <div className="image-part h-full w-full overflow-hidden">
              <div className="moving-image  bg-[url(images/bikeTours.jpg)] bg-cover bg-center h-full w-full"></div>
            </div>
            <div className="desc-part flex flex-col justify-center items-center">
              <h2 className=" w-1/3 text-center font-semibold text-2xl text-white desc-font">Explore Unforgettable Cycling Tours</h2>
              <p className=" w-2/3 text-center font-medium text-stone-600 text-xl desc-font">
                Whether you're a leisure cyclist or a seasoned pro, our tours
                offer something for everyone. Join us for an unforgettable
                adventure on two wheels!
              </p>
              <button className=" px-8 py-2 border border-stone-600 rounded-2xl text-white"> Go </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
