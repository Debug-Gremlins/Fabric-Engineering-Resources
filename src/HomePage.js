import React from "react";
import Vector from "./components/sections/Vector";
import Banner from "./components/sections/Banner";
import Details from "./components/sections/Details";
import Counter from "./components/sections/CounterUp";
import Footer from "./components/includes/Footer";

function HomePage() {
  return (
    <div>
      <Vector />
      <Banner />
      <Counter />
      <Details />
      <Footer />
    </div>
  );
}

export default HomePage;
