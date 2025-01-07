import React from "react";
import Banner from "../components/Banner";
import TopMovies from "../components/TopMovies";
import ActionMovie from "../components/ActionMovie";
import Featured from "../components/Featured";
import Review from "../components/Review";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <TopMovies></TopMovies>
      <ActionMovie></ActionMovie>
      <Review></Review>
      <Questions></Questions>
    </div>
  );
};

export default Home;
