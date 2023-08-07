import React from "react";
import "../../styles/App.css";

const Community = () => {
  return (
    <div className="community h-screen overflow-hidden relative">
      <div className="community-wrapper moving-image bg-[url(images/community.jpg)] bg-cover bg-center h-full w-full">
        {/* kinda back image */}
      </div>
      <div className="community-content absolute top-1/3 left-56">
        <div className="community-main w-96">
          <h2 className=" text-yellow-400 text-3xl">Join the Bikez Community: Ride Together, Explore Together</h2>
        </div>

        <div className="community-desc w-96 text-white text-lg">
          Are you a passionate cyclist looking for a place to connect with
          fellow bike enthusiasts? Look no further—welcome to the Bikez
          Community, where the love for two wheels brings us all together.
        </div>

        <div className="community-join ">
          <button className="mt-4 px-8 py-1 border border-yellow-400 text-white rounded-lg text-center cursor-pointer hover:bg-yellow-400">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Community;
