import React from "react";
import "../styles/App.css";
import Intro from "../components/Home/Intro";
import BlogsHeading from "../components/Home/BlogsHeading";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
