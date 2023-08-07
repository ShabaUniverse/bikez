import React from "react";

const RunningText = () => {
  return (
    <div className="scrolling-wrapper bg-yellow-400 w-full h-16">
      <div className="scrolling-slider w-full flex justify-center items-center h-full">
        <marquee
          behavior="alternate"
          direction="left"
          className="text-3xl text-white logo-font">
          Trek <span className=" text-stone-600 logo-font"> Giant </span>  Specialized  Cannondale 
          Scott Cervélo <span className=" text-stone-600 logo-font"> Pinarello </span> Colnago Bianchi Merida Raleigh
           Fuji  <span className=" text-stone-600 logo-font"> Kona </span> Tern  Santa Cruz 
        </marquee>
      </div>
    </div>
  );
};

export default RunningText;
