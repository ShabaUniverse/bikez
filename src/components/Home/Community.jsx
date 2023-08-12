import React from "react";
import "../../styles/App.css";

const Community = () => {
  return (
    <div className="community h-screen overflow-hidden relative">
      <div className="community-wrapper moving-image bg-[url(images/community.jpg)] bg-cover bg-center h-full w-full">
        {/* kinda back image */}
      </div>
      <div className="community-text w-3/4 absolute top-[35%] left-[5%] md:left-[20%] md:w-2/4 lg:left-[15%] lg:w-[40%]">
        <div className="community-texts">
          <h2 className=" text-yellow-400 text-2xl shadowing">
            Join the Bikez Community: Ride Together, Explore Together
          </h2>

          <h3 className="community-desc text-white text-lg shadowing">
            Are you a passionate cyclist looking for a place to connect with
            fellow bike enthusiasts? Look no further—welcome to the Bikez
            Community, where the love for two wheels brings us all together.
          </h3>

          <button className="mt-4 px-8 py-1 border border-yellow-400 text-white rounded-lg cursor-pointer hover:bg-yellow-400">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
