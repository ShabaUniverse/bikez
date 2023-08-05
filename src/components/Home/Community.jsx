import React from "react";
import "../../styles/App.css";

const Community = () => {
  return (
    <div className="community h-screen bg-[url(images/community.jpg)] bg-cover bg-center">
      <div className="community-container w-4/5 mx-auto h-full">
        <div className="community-wrapper h-full flex justify-center items-center">
          <div className="scrollport">
            <div className="first-box blur-backdrop w-52 h-52">
              <p className="inset-0 text-white">join now</p>
            </div>
            <div className="first-box blur-backdrop w-52 h-52">
              <p className="inset-0 text-white">join now</p>
            </div>
            <div className="first-box blur-backdrop w-52 h-52">
              <p className="inset-0 text-white">join now</p>
            </div>
            <div className="first-box blur-backdrop w-52 h-52">
              <p className="inset-0 text-white">join now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
