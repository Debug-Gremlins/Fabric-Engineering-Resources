import React, { Component } from "react";
import styled from "styled-components";
import { FcBinoculars } from "react-icons/fc";
import { IconContext } from "react-icons";
import bannerImg from "../../assets/topbnrbg2.png";
// import balloon from "../../assets/balloon.png";
// import cloud from "../../assets/cloud.png";
// import cloud2 from "../../assets/cloud2.png";

class UpperBanner extends Component {
  render() {
    return (
      <div>
        <TopBannerArea>
          <div className="top-bnr-overlay">
            {/* <img src={balloon}  alt="balloon" className="balloon" srcSet />
            <img src={cloud} alt="cloud" className="balloncloudfade" srcSet />
            <img src={cloud2} alt="cloud" className="balloncloudfade2" srcSet /> */}
            <div className="home-shield row text-center justify-content-between">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a
                  href="https://github.com/Debug-Gremlins/Fabric-Engineering-Resource/blob/master/README.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/github/package-json/v/Debug-Gremlins/Fabric-Engineering-Resources?&labelColor=f4eee8&color=important&label=yarn Deployed&logo=Yarn&logoColor=blue&style=plastic"
                    alt="cq"
                    srcSet
                  />
                </a>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                  <div className="top-over-details-part text-left">
                    <h1>Fabric Engineering</h1>
                    <p>
                      Fabric Engineering is one of the basic textile engineering
                      branches with its large application in weaving, knitting
                      and non-woven. The purpose of this department is to
                      develop engineers who, in combination of their knowledge,
                      skills and latest technologies, can face challenge of the
                      market and ensure product quality to meet the demand of
                      the time.
                    </p>
                    <div className="btn">
                      <a
                        href="https://www.butex.edu.bd/department-of-fabric-engineering-2/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconContext.Provider value={{ size: "25" }}>
                          Learn More <FcBinoculars />
                        </IconContext.Provider>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TopBannerArea>
      </div>
    );
  }
}

export default UpperBanner;

const TopBannerArea = styled.div`
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .top-bnr-overlay {
    height: inherit;
    background: ${({ theme }) => theme.topBnrOverlay};
  }
  .top-over-details-part {
    width: 50%;
    padding: 250px 0px;
  }

  .top-over-details-part h1 {
    font-family: "Ubuntu";
    color: ${({ theme }) => theme.topBnrH1};
    font-size: 3rem;
  }

  .top-over-details-part p {
    line-height: 1.7;
    padding-top: 15px;
    font-size: 18px;
    color: ${({ theme }) => theme.topBnrParagraph};
  }
  .home-shield {
    position: absolute;
    bottom: 110px;
    right: 20px;
  }

  .balloon {
    animation: balloonup 13s, balloonrotate 10s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    height: auto;
    max-width: 150px;
    position: absolute;
    right: 18%;
    top: 10%;
    width: 6%;
    z-index: 2;
  }
  @keyframes balloonup {
    0% {
      top: 30%;
    }
    25% {
      top: 25%;
    }
    50% {
      top: 20%;
    }
    75% {
      top: 25%;
    }
    100% {
      top: 30%;
    }
  }
  @keyframes balloonrotate {
    0% {
      transform: rotate(-3deg);
    }
    20% {
      transform: rotate(4deg);
    }
    45% {
      transform: rotate(-4deg);
    }
    70% {
      transform: rotate(4deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }

  .balloncloudfade {
    animation: bpcloudfade1 27s, bpslide1 27s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    height: auto;
    max-width: 300px;
    position: absolute;
    right: 15%;
    top: 20.5%;
    width: 16%;
    z-index: 1;
  }
  @keyframes bpcloudfade1 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    35% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes bpslide1 {
    0% {
      right: 25.5%;
    }
    25% {
      right: 20.5%;
    }
    100% {
      right: 2%;
    }
  }

  .balloncloudfade2 {
    animation: bpcloudfade2 27s, bpslide2 27s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    height: auto;
    max-width: 300px;
    position: absolute;
    right: 15%;
    top: 40.5%;
    width: 16%;
    z-index: 1;
  }
  @keyframes bpcloudfade2 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    35% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes bpslide2 {
    0% {
      right: 38.5%;
    }
    25% {
      right: 28.5%;
    }
    100% {
      right: 9%;
    }
  }

  @media (max-width: 991px) {
    .top-over-details-part {
      width: 70%;
      padding: 240px 0px 100px;
    }
    .home-shield {
      position: absolute;
      bottom: 15px;
      right: 20px;
    }
  }

  @media (max-width: 767px) {
    .balloncloudfade2 {
      display: none;
    }
    .home-shield {
      position: absolute;
      bottom: 20px;
      right: 10px;
    }

    .balloon {
      animation: balloonup 13s, balloonrotate 10s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      height: auto;
      max-width: 150px;
      position: absolute;
      right: 5%;
      top: 10%;
      width: 9%;
      z-index: 2;
    }
    @keyframes balloonup {
      0% {
        top: 30%;
      }
      25% {
        top: 25%;
      }
      50% {
        top: 20%;
      }
      75% {
        top: 25%;
      }
      100% {
        top: 30%;
      }
    }
    @keyframes balloonrotate {
      0% {
        transform: rotate(-3deg);
      }
      20% {
        transform: rotate(4deg);
      }
      45% {
        transform: rotate(-4deg);
      }
      70% {
        transform: rotate(4deg);
      }
      100% {
        transform: rotate(-2deg);
      }
    }

    .balloncloudfade {
      animation: bpcloudfade1 27s, bpslide1 27s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      height: auto;
      max-width: 300px;
      position: absolute;
      right: 15%;
      top: 21.5%;
      width: 16%;
      z-index: 1;
    }
    @keyframes bpcloudfade1 {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 1;
      }
      35% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes bpslide1 {
      0% {
        right: 20.5%;
      }
      25% {
        right: 13.5%;
      }
      100% {
        right: 2%;
      }
    }

    .top-over-details-part {
      width: 100%;
      padding: 180px 20px 120px;
    }
    .top-over-details-part h1 {
      font-size: 1.1 rem;
    }
    .top-over-details-part p {
      font-size: 1rem;
    }
    .top-over-details-part h1 {
      font-size: 30px;
    }

    .top-over-details-part p {
      font-size: 16px;
    }
  }
`;
