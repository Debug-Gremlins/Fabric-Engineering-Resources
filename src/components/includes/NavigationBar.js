import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/icon.png";
import {
  FcHome,
  FcIdea,
  FcRules,
  FcMindMap,
  FcSurvey,
  FcElectronics,
} from "react-icons/fc";
import { IconContext } from "react-icons";
import { GiArrowScope } from "react-icons/gi";

const NavigationBar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <IconContext.Provider value={{ size: "30", color: "#ccffff" }}>
                <GiArrowScope />
              </IconContext.Provider>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <IconContext.Provider value={{ size: "25" }}>
                      <FcHome />
                      Home
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IconContext.Provider value={{ size: "25" }}>
                      <FcIdea />
                      Resources
                    </IconContext.Provider>
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="nav-link" to="/level1-term1">
                        Level 1 Term 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/level1-term2">
                        Level 1 Term 2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/syllabus">
                    <IconContext.Provider value={{ size: "25" }}>
                      <FcRules />
                      Syllabus
                    </IconContext.Provider>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 mr-auto list-unstyled  justify-content-between">
                <li className="nav-item">
                  <Link className="nav-link" to="/accessories">
                    <IconContext.Provider value={{ size: "25" }}>
                      <FcMindMap />
                      Accessories
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notice">
                    <IconContext.Provider value={{ size: "25" }}>
                      <FcSurvey />
                      Notice
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/developer">
                    <IconContext.Provider value={{ size: "25" }}>
                      <FcElectronics />
                      Developer
                    </IconContext.Provider>
                  </Link>
                </li>
              </ul>
            </div>

            <Link className="navbar-brand navbar-logo" to="/" exact>
              <img className="navBrand" src={Logo} alt="" srcSet />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
