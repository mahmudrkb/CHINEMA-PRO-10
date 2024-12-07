import React from "react";
import Banner from "../components/Banner";
import TopMovies from "../components/TopMovies";
import ActionMovie from "../components/ActionMovie";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <TopMovies></TopMovies>
      <ActionMovie></ActionMovie>
    </div>
  );
};

export default Home;
