import React, { Component } from "react";
import announceImg from "../../assets/svg/bearie-partner.svg";
import styled from "styled-components";

export class AnnounceScreen extends Component {
  render() {
    return (
      <div>
        <AnnounceArea>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="card col-lg-6 col-md-6 col-sm-12">
                <img src={announceImg} alt="dataImg" srcSet />
              </div>
              <div className="card content col-lg-4 col-md-5 col-sm-12">
                <h1>CT & Term Exam Updates!</h1>
                <p>
                  Get CT and Term related all updates here. Contents are coming
                  soon 🖤
                </p>
              </div>
            </div>
          </div>
        </AnnounceArea>
      </div>
    );
  }
}

export default AnnounceScreen;

const AnnounceArea = styled.div`
  padding: 200px 0px 50px;
  img {
    max-width: 100%;
    animation: updown 5s ease infinite;
  }
  @keyframes updown {
    0% {
      transform: translateY(-5%);
    }

    50% {
      transform: translateY(5%);
    }

    100% {
      transform: translateY(-5%);
    }
  }
  .card:nth-child(2) {
    margin-left: 20px;
    margin-bottom: 0px;
  }
  .content {
    text-align: left;
  }
  h1 {
    font-size: 30px;
    color: brown;
  }
  p {
    color: #010101;
    font-size: 20px;
  }
  @media (max-width: 991px) {
    h1 {
      font-size: 25px;
    }

    p {
      font-size: 16px;
    }
  }
  @media (max-width: 767px) {
    padding: 180px 20px 50px;
    .card {
      margin-left: 0px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 28px;
    }
  }
`;
