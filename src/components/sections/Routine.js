import React from "react";
import Rotimg from "../../assets/exs.png";

function Routine() {
  return (
    <div>
      <section className="routine" id="rot">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <img src={Rotimg} alt="" srcSet />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className="section-title">
                  <h1>PDF Folder</h1>
                  <div className="btn">
                    <a
                      href="https://drive.google.com/drive/folders/1-e1yNWk6uSCJzgxruVZs9Iouh03nBodk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Here
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="section-title">
                  <h1>Routine</h1>
                  <div className="btn">
                    <a
                      href="https://drive.google.com/file/d/1tQfwJulaJvKpJ2snhavqDAgX0KovXeIz/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
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

export default Routine;
