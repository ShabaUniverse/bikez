import React from "react";

const RunningText = () => {
  return (
    <div className="scrolling-wrapper bg-yellow-400 w-full h-16">
      <div className="scrolling-slider w-full flex justify-center items-center h-full">
        <marquee behavior="alternate" direction="left" className="text-3xl text-white">
          GIANT SCOTT CROSS COUNTRY ROAD GIANT TRINX LENON BALE PICKER SALUT
          ASTMA HEIZELFEILD
        </marquee>
      </div>
    </div>
  );
};

export default RunningText;
