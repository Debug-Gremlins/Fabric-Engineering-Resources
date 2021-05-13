import React from 'react'
import Logo from '../../assets/icon.png'
import { Link } from "react-router-dom";
import Footbg from '../../assets/footer_bg.png';

function Footer() {
    return (
      <div>
        <footer data-aos="fade-up" data-aos-duration={3000}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <span>Planned and Developed by :</span>
                    <h3>Arnob Mahmud</h3>
                  </li>
                  <li>
                    <span>Our Departmental Group : </span>
                    <h3>
                      <a
                        href="https://www.facebook.com/groups/fabricmanufacturingengineering46/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Fabric Engineering 46
                      </a>
                    </h3>
                  </li>
                  <li>
                    {/* <a href="#home" target="_blank"></a> */}
                    <Link to="/">
                      <img className="rotating" src={Logo} alt="" srcSet />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <h4>Suggest Changes to Update Next Version!</h4>
                  </li>
                  <li>
                    <h5>Go to Individual Section</h5>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/bce">
                      BCE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chemistry">
                      Chemistry
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/math">
                      Mathematics
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ntf">
                      NTF
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/physics">
                      Physics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cpy-rgt">
              Copyright ©2021{" "}
              <span>
                <Link to="/">Fabric Engineering 46</Link>
              </span>{" "}
              All Rights Reserved
            </div>
            <div className="overlaybttn">
              <a id="bottombce" href="#top">
                <i className="fa fa-arrow-circle-up" aria-hidden="true" />
                <span>Top</span>
              </a>
            </div>
            <div className="foot_bg">
              <img src={Footbg} alt="footbg" srcSet />
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer
