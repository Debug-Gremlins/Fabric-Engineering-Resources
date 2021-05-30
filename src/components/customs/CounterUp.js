import React from "react";
import styled from "styled-components";
import CustomCount from "../widgets/CouterComp";
import { BiShieldAlt } from "react-icons/bi";
import { FiSlack } from "react-icons/fi";
import { ImBook } from "react-icons/im";

const CounterUp = () => {
  return (
    <>
      <CounterArea>
        <div className="container">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-8 single-class">
              <CustomCount
                icons={<BiShieldAlt />}
                title="Secured Development"
                paragraph="Developed by JavaScript framework ReactJS."
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-8 single-class">
              <CustomCount
                icons={<ImBook />}
                title="Coursewise Resources"
                paragraph="Online class lectures provided by coursewise segments!"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-8 single-class">
              <CustomCount
                icons={<FiSlack />}
                title="Regular Monitorization"
                paragraph="Keeping resources and pdf stuffs update weekly."
              />
            </div>
          </div>
        </div>
      </CounterArea>
    </>
  );
};

export default CounterUp;

const CounterArea = styled.div`
  padding: 90px 0px 10px;
  align-items: center;
  .card {
    padding: 100px 40px;
    background-color: #ffffb299;
  }
  h1 {
    font-size: 30px;
    display: inline-table;
    color: #0c253a;
    margin: 20px 0px;
  }
  p {
    text-align: center;
    color: #2d2d2d;
    font-size: 18px;
  }
  @media (max-width: 991px) {
    .card {
      padding: 90px 20px;
      background-color: #ffffb299;
    }
    h1 {
      font-size: 22px;
    }
  }
  @media (max-width: 767px) {
    .card {
      padding: 120px 40px;
    }
  }
`;
