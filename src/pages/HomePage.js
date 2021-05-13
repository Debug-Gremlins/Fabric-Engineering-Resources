import React from "react";
// import Vector from "../components/sections/Vector";
import Banner from "../components/sections/Banner";
import Details from "../components/sections/Details";
import Counter from "../components/sections/CounterUp";
import VideoNav from '../components/includes/VideoNav'

function HomePage() {
  return (
    <div>
      <VideoNav />
      <Counter />
      <Banner />
      <Details />
    </div>
  );
}

export default HomePage;
