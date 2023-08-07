import React, { useEffect } from "react";
import "../styles/App.css";
import Intro from "../components/Home/Intro";
import Community from "../components/Home/Community";
import { useLocation } from "react-router-dom";
import RunningText from "../components/Home/RunningText";
import Footer from "../components/Footer";

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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
