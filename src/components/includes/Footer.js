import React from "react";
import styled from "styled-components";
import Logo from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { OverlayButton } from "../config/Palette";
import FooterLink from "../widgets/FooterLink";

function Footer() {
  return (
    <div>
      <FooterArea>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                {/* <li>
                  <span>Planned and Developed by :</span>
                  <h3>Arnob Mahmud</h3>
                </li> */}
                <li>
                  <Link to="/">
                    <img className="rotating" src={Logo} alt="" srcSet />
                  </Link>
                </li>
                <li>
                  <span> Our Departmental Group : </span>
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
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <FooterLink
                title="Individual Sections"
                subTitle=""
                link1={
                  <Link className="nav-link" to="/bce">
                    BCE
                  </Link>
                }
                link2={
                  <Link className="nav-link" to="/chemistry">
                    Chemistry
                  </Link>
                }
                link3={
                  <Link className="nav-link" to="/ntf">
                    NTF
                  </Link>
                }
                link4={
                  <Link className="nav-link" to="/math">
                    Mathematics
                  </Link>
                }
                link5={
                  <Link className="nav-link" to="/physics">
                    Physics
                  </Link>
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <FooterLink
                title="Extras"
                subTitle=" "
                link1={
                  <Link className="nav-link" to="/accessories/#bsr">
                    Bus Route
                  </Link>
                }
                link2={
                  <Link className="nav-link" to="/accessories/#routine">
                    PDF Folder
                  </Link>
                }
                link3={
                  <Link className="nav-link" to="/accessories/#routine">
                    Routine
                  </Link>
                }
                link4={
                  <Link className="nav-link" to="/syllabus">
                    Syllabus
                  </Link>
                }
                link5={
                  <Link className="nav-link" to="/notice">
                    Term Updates
                  </Link>
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <FooterLink
                title="Developer Panel"
                subTitle="Suggest changes for deploying next version!"
                link1={
                  <Link className="nav-link" to="/developer">
                    Developer
                  </Link>
                }
                link2={
                  <a
                    className="nav-link"
                    href="mailto: arnob.tech.me@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mail
                  </a>
                }
                link3={
                  <a
                    className="nav-link"
                    href="https://github.com/Debug-Gremlins/Fabric-Engineering-Resource/blob/master/README.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Current Version {}
                    <img
                      src="https://img.shields.io/github/package-json/v/Debug-Gremlins/Fabric-Engineering-Resources?&labelColor=f4eee8&color=important&label=yarn Deployed&logo=Yarn&logoColor=blue&style=plastic"
                      alt="cq"
                      srcSet
                    />
                  </a>
                }
              />
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
              <span></span>
            </a>
          </OverlayButton>
        </div>
      </FooterArea>
    </div>
  );
}

export default Footer;

const FooterArea = styled.div`
  font-family: Ubuntu;
  text-align: center;
  padding: 90px 0px 10px;
  background: #efc7c7;
  position: relative;
  h3 {
    color: #0f253b;
    font-size: 20px;
  }
  h4 {
    color: #e0245e;
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
    color: #093d68;
  }
  ul {
    text-align: left;
  }
  ul li {
    line-height: 2;
    list-style-type: none;
  }
  ul li span {
    font-size: 20px;
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
    font-size: 18px;
    font-weight: 500;
    padding: 40px 0px 10px;
    color: #15202b;
  }

  .cpy-rgt span a {
    text-decoration: none;
    color: #e0245e;
    font-weight: 500;
  }
  .footerOverlay {
    margin: 0;
    bottom: 60px;
    right: 40px;
    position: absolute;
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
  .nav-item {
    padding-left: 0;
  }
  .rotating {
    max-width: 70% !important;
  }

  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
    padding: 50px 0px 10px;
    .cpy-rgt {
      padding-top: 0px;
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
    .rotating {
      max-width: 40% !important;
    }
    .footerOverlay {
      bottom: 100px;
    }
  }
`;
