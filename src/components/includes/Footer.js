import React from "react";
import styled from "styled-components";
import Logo from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { OverlayButton } from "../config/Palette";

function Footer() {
  return (
    <div>
      <FooterArea>
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
          <OverlayButton className="footerOverlay">
            <a id="bottombce" href="#top">
              <i className="fa fa-arrow-circle-up" aria-hidden="true" />
              <span>Top</span>
            </a>
          </OverlayButton>
        </div>
      </FooterArea>
    </div>
  );
}

export default Footer;

const FooterArea = styled.div`
  text-align: center;
  padding: 70px 0px 10px;
  background: #efc7c7;
  position: relative;
  h3 {
    color: #0f253b;
  }
  ul {
    text-align: left;
  }
  ul li {
    list-style-type: none;
  }
  ul li span {
    font-size: 26px;
    font-family: Ubuntu;
    color: #e0245e;
    display: inline-block;
    padding: 5px 0px;
  }
  ul li a {
    font-family: Poppins;
    text-decoration: none;
    display: inline-block;
    color: #e4e4e4;
    color: #15202b;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  ul li a:hover {
    opacity: 0.8;
  }
  .cpy-rgt {
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0px;
    color: #15202b;
  }

  .cpy-rgt span a {
    text-decoration: none;
    color: #e0245e;
    font-weight: 500;
  }

  .rotating {
    max-width: 50%;
    transition: all linear 0.5s;
    animation: rotating 7s linear infinite;
  }

  .footerOverlay{
    margin: 0;
    bottom: 60px;
    right: 40px;
    position :absolute
  }
  .nav-link {
    font-style: initial;
  }
  .nav-item .nav-link {
    font-size: 16px;
    color: #0c253a;
    margin: 5px 0px;
    font-weight: 400;
    padding: 0px;
    font-family: "Rubik";
  }
  .nav-link:hover {
    border-bottom: 2px solid transparent;
  }
  .rotating {
    max-width: 30% !important;
  }
  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
    .cpy-rgt {
      font-size: 12px;
    }
    position: relative;
    ul li span {
      font-size: 18px;
    }
    ul li a {
      font-size: 15px;
    }
    ul li h4 {
      font-size: 17px;
    }
    ul li h5 {
      font-size: 16px;
    }
  }
`;
