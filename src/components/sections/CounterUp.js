import React from "react";
import CustomCount from "../Customs/CouterComp";

function CounterUp() {
  return (
    <div>
      <section
        className="counter-area"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-4 col-md-4 col-sm-3 single-class">
              <CustomCount title="BCE" num="20" paragraph="Lectures" />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-3 single-class">
              <CustomCount title="Chemistry" num="30" paragraph="Lectures" />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-3 single-class">
              <CustomCount title="MATH" num="20" paragraph="Lectures" />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-3 single-class">
              <CustomCount title="NTF" num="20" paragraph="Lectures" />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-3 single-class">
              <CustomCount title="Physics" num="20" paragraph="Lectures" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CounterUp;
