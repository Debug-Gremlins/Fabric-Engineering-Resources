import React from "react";
import AzimpurBus from "../../assets/Azimpur Route.png";
import UttaraBus from "../../assets/Uttara Route.png";
import MirpurBus from "../../assets/Mirpur Route.png";
import PurandhkBus from "../../assets/Jatrabari Route.png";
import Card from "../Customs/BusCard";

function BusRoute() {
  return (
    <div>
      <section
        id="bsr"
        className="bus-route"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="container text-center">
          <div className="section-title">
            <h1>Bus Routes</h1>
          </div>
          <div className="row">
            
            <div className="card bus1 col-lg-6 col-md-12 col-sm-12">
              <Card routeTitle="Uttara Route" routeImg={UttaraBus} />
            </div>
            <div className="card bus2 col-lg-6 col-md-12 col-sm-12">
              <Card routeTitle="Mirpur Route" routeImg={MirpurBus} />
            </div>
            <div className="card bus3 col-lg-6 col-md-12 col-sm-12">
              <Card routeTitle="Azimpur Route" routeImg={AzimpurBus} />
            </div>
            <div className="card bus4 col-lg-6 col-md-12 col-sm-12">
              <Card routeTitle="Jatrabari Route" routeImg={PurandhkBus} />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusRoute;
