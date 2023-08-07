import React, { useEffect } from "react";
import "../styles/App.css";
import Intro from "../components/Home/Intro";
import Community from "../components/Home/Community";
import { useLocation } from "react-router-dom";
import RunningText from "../components/Home/RunningText";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="home">
      <div className="home-wrapper">
        <Intro />
        <RunningText />
        <Community />
      </div>
    </div>
  );
};

export default Home;
