import React from "react";
import Banner from "../components/Banner";
import TopMovies from "../components/TopMovies";
import ActionMovie from "../components/ActionMovie";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <TopMovies></TopMovies>
      <ActionMovie></ActionMovie>
    </div>
  );
};

export default Home;
