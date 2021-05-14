import React from "react";
import Devimg from "../../assets/developer.png";

function Developer() {
  return (
    <div>
      <section className="developedBy">
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div
              className="col-lg-6 col-md-12 col-sm-12 text-left"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              <div className="dev-icon">
                <img src={Devimg} alt="" srcSet />
              </div>
            </div>
            <div
              className="col-lg-5 col-md-12 col-sm-12 text-center dev-card"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              <div className="card">
                <h1>Arnob Mahmud</h1>
                <p>
                  Fabric Engineering (2020 - 1 - 2 - 047) <br />
                  Front-end Developer &amp; Flutter Application Developer.
                </p>
                <h5>Contact</h5>
                <div className="row justify-content-start">
                  <div className="social col-lg-12 col-md-12 col-sm-6">
                    <ul>
                      <li>
                        <a
                          href="http://www.facebook.com/arnob.mahmud.amd"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-square" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="http://www.twitter.com/@Arnob__Mahmud"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/arnobmahmud/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="fab fa-linkedin-in"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="http://github.com/ArnobMahmud"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="https://discord.com/channels/ArnobMahmud#5622"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-discord" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="mailto: arnob.tech.me@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-envelope" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3>Code Analysis</h3>
                <div className="row text-center justify-content-between shield">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a
                      href="https://github.com/Debug-Gremlins/Fabric-Engineering-Resource/blob/master/LICENSE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/License-MIT-critical?style=plastic&logo=appveyor&logoColor=a70023&labelColor=lightblue&color=471e61"
                        alt="mit"
                        srcSet
                      />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a
                      href="https://scrutinizer-ci.com/g/Debug-Gremlins/Fabric-Engineering-Resource/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/scrutinizer/quality/g/Debug-Gremlins/Fabric-Engineering-Resource?color=green&label=Code%20Quality%20x%2F10&logo=Scrutinizer%20CI&logoColor=e0e0e0&style=plastic"
                        alt="cq"
                        srcSet
                      />
                    </a>
                  </div>
                </div>
                <div className="row text-center justify-content-between">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a
                      href="https://github.com/Debug-Gremlins/Fabric-Engineering-Resource/blob/master/README.md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/github/package-json/v/Debug-Gremlins/Fabric-Engineering-Resources?&labelColor=f4eee8&color=important&label=Deployed&logo=Yarn&logoColor=blue&style=plastic"
                        alt="cq"
                        srcSet
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Developer;
