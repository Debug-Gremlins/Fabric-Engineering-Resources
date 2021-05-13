import React, { Component } from "react";
import Bgvideo from "../videos/180626_12_Seocho-Dong_23.mp4";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

class VideoPart extends Component {
  render() {
    return (
      <div>
        <div className="top-banner">
          <video
            muted
            autoPlay
            loop
            // style={{
            //   position: "absolute",
            //   width: "100%",
            //   zIndex: "-1",
            //   height: "100%",
            //   objectFit: "cover",
            //   left: "50%",
            //   top: "50%",
            //   transform: "translate(-50%,-50%)",
            // }
            // }
          >
            <source src={Bgvideo} type="video/mp4"></source>
          </video>
          <header>
            <div className="container">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home
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
                          Resources
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link className="nav-link" to="/bce">
                              BCE
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-link" to="/chemistry">
                              Chemistry
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-link" to="/math">
                              MATH
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-link" to="/ntf">
                              NTF
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-link" to="/physics">
                              Physics
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/syllabus">
                          Syllabus
                        </Link>
                      </li>
                    </ul>
                    <ul className="mb-2 mb-lg-0 ml-auto list-unstyled d-flex justify-content-end">
                      <li className="nav-item">
                        <Link className="nav-link" to="/accessories">
                          Accessories
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/developer">
                          Developer
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <Link className="navbar-brand navbar-logo" to="/" exact>
                    <img className="rotate" src={Logo} alt="" srcSet />
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="overlay-details col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                <h1>Fabric Engineering</h1>
                <p>
                  Fabric Engineering is one of the basic textile engineering
                  branches with its large application in weaving, knitting and
                  non-woven. The purpose of this department is to develop
                  engineers who, in combination of their knowledge, skills and
                  latest technologies, can face challenge of the market and
                  ensure product quality to meet the demand of the time.
                </p>
                <div className="btn">
                  <a
                    href="https://www.butex.edu.bd/department-of-fabric-engineering-2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPart;
