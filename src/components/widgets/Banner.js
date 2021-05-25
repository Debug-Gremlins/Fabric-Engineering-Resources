import React from "react";
import Bannerimg from "../../assets/banner.png";
import { FcBinoculars } from "react-icons/fc";
import { IconContext } from "react-icons";

function Banner() {
  return (
    <div>
      <section
        className="banner"
        style={{ backgroundImage: `url(${Bannerimg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xsm-6" />
            <div className="banner-overlay text-left col-lg-6 col-md-6 col-sm-6 col-xsm-6">
              <h1>Free E-books</h1>
              <p>
                Textile Study Center is a virtual topic based library that will
                cover all textile topics. Textile students from any university
                can contribute here.They have categorized all the topics
                according to BUTEX syllabus.
              </p>
              <div className="btn">
                <a
                  href="https://textilestudycenter.com/textile-books-free-donwload/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ size: "25" }}>
                    Learn More <FcBinoculars />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
