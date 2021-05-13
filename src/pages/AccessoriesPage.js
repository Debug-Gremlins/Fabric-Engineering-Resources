import React from "react";
import BusRoute from "../components/sections/BusRoute";
import Routine from "../components/sections/Routine";
import NavBar from "../components/includes/NavigationBar";

function AccessoriesPage() {
  return (
    <div>
      <NavBar />
      <BusRoute />
      <Routine />
    </div>
  );
}

export default AccessoriesPage;
