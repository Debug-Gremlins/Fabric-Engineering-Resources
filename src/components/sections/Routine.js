import React from "react";
import Rotimg from "../../assets/exs.png";
import CustomCard from "../Customs/Card";

function Routine() {
  return (
    <div>
      <section className="routine" id="rot">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              <img src={Rotimg} alt="" srcSet />
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              <CustomCard cardTitle="PDF Folder" cardLink="Visit Here" />
              <CustomCard cardTitle="Routine" cardLink="Learn More" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Routine;
