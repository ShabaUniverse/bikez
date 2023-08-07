import React from "react";
import '../styles/App.css';

const Service = () => {
  return (
    <div className="service pt-24 bg-stone-600">
      <div className="service-container">
        <div className="service-wrapper">
          <div className="first-service service-grid h-96">
            <div className="image-part h-full w-full overflow-hidden">
                <div className="moving-image  bg-[url(images/bikeTesting.jpg)] bg-cover bg-center h-full w-full"></div>
            </div>
            <div className="desc-part bg-black"></div>
          </div>

          <div className="second-service service-grid h-96">
            <div className="desc-part bg-black"></div>
            <div className="image-part h-full w-full overflow-hidden">
                <div className="moving-image  bg-[url(images/bikeTesting.jpg)] bg-cover bg-center h-full w-full"></div>
            </div>
          </div>

          <div className="first-service service-grid h-96">
            <div className="image-part h-full w-full overflow-hidden">
                <div className="moving-image  bg-[url(images/bikeTesting.jpg)] bg-cover bg-center h-full w-full"></div>
            </div>
            <div className="desc-part bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
