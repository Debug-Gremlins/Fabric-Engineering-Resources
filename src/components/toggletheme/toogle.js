import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <>
      <ButtonContainer>
        <button onClick={toggleTheme} className="switch-toggle">
          <div className="box"></div>
        </button>
      </ButtonContainer>
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

const ButtonContainer = styled.div`
  button {
    height: 28px;
    width: 55px;
    border-radius: 25px;
    background: antiquewhite;
    border: 2px solid transparent;
    background-color: #d498dc;
    position: absolute;
  }
  .box {
    padding: 10px;
    height: 20px;
    width: 20px;
    top: 0px;
    left: 2px;
    border-radius: 50%;
    background-color: #3f2f41;
    position: relative;
    transition: all linear 0.2s;
  }
  .box:active {
    transform: translateX(25px);
  }
  .box:active {
    background-color: black;
  }
  .switch-toggle {
    position: absolute;
    position: fixed;
    top: 40px;
    right: 20px;
    z-index: 110;
  }
`;
