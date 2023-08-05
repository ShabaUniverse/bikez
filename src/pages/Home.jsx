import React from "react";
import "../styles/App.css";
import Intro from "../components/Home/Intro";
import Community from "../components/Home/Community";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <Intro />
        <Community />
      </div>
    </div>
  );
};

export default Home;
