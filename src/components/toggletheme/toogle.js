import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <>
      {/* <ButtonContainer>
        <div onClick={toggleTheme} className="switch-toggle">
          <label>
            <input type="checkbox" defaultChecked />
            <span />
          </label>
        </div>
      </ButtonContainer> */}
      <ButtonContainer>
        <button className="btn-danger switch-toggle" onClick={toggleTheme}>
          <span> Mode</span>
        </button>
      </ButtonContainer>
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

/*  */

export default Toggle;
const ButtonContainer = styled.div`
  .btn-danger {
    color: #fff;
    background-color: #16443e;
    padding: 15px 15px;
    border: none;
  }
  .btn-danger:focus {
    outline: none;
  }
  span {
    font-weight: bold;
  }
  .switch-toggle {
    position: absolute;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 110;
    width: auto;
    display: table;
  }
  .switch-toggle label {
    width: 80px;
    height: 30px;
    position: relative;
    display: block;
    margin: 20px 0px;
  }
  .switch-toggle label span {
    position: absolute;
    background-color: #c1c1c1;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 50px;
  }
  .switch-toggle label input {
    visibility: hidden;
  }
  .switch-toggle label span:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 100%;
    top: 5px;
    left: 5px;
    transition: 0.5s;
  }
  .switch-toggle label input:checked + span:after {
    transform: translateX(50px);
  }
  .switch-toggle label input:checked + span {
    background: linear-gradient(to right, #9c27b0, #e91e63);
  }
`;
