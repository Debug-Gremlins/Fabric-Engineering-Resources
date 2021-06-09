import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/icon.png";
// import { useDarkMode } from "../toggletheme/useDarkMode";
// import { lightTheme, darkTheme } from "../toggletheme/palette";
// import { ThemeProvider } from "styled-components";
// import {
//   FcHome,
//   FcIdea,
//   FcRules,
//   FcMindMap,
//   FcSurvey,
//   FcElectronics,
// } from "react-icons/fc";
import { IconContext } from "react-icons";
import { GiArrowScope } from "react-icons/gi";
// import Toggle from "../toggletheme/toogle";

const NavigationBar = () => {
  // const [theme, toggleTheme] = useDarkMode();
  // const themeMode = theme === "light" ? lightTheme : darkTheme;
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
                      Syllabus
                    </IconContext.Provider>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 mr-auto list-unstyled  justify-content-between">
                <li className="nav-item">
                  <Link className="nav-link" to="/accessories">
                    <IconContext.Provider value={{ size: "25" }}>
                      Accessories
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notice">
                    <IconContext.Provider value={{ size: "25" }}>
                      Notice
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/developer">
                    <IconContext.Provider value={{ size: "25" }}>
                      Developer
                    </IconContext.Provider>
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="navbar-brand" to="/" exact>
              <img className="navBrand" src={Logo} alt="" srcSet />
            </Link>
            {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
            {/* <ThemeProvider theme={themeMode}>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </ThemeProvider> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
