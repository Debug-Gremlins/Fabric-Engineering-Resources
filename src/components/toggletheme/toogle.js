import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  // const isLight = theme === "light";
  return (
    <>
      <ButtonContainer>
        {/* <button onClick={toggleTheme} className="switch-toggle"> */}
        <div className="switch-toggle ">
          <input
            type="checkbox"
            className="checkbox"
            id="chk"
            onClick={toggleTheme}
          />

          <label class="label" for="chk">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div class="ball"></div>
          </label>
        </div>
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
  .switch-toggle {
    position: absolute;
    position: fixed;
    top: 40px;
    right: 25px;
    z-index: 110;
  }

  .checkbox {
    opacity: 0;
    position: absolute;
    padding: 0;
    margin: 0;
    border: none;
  }
  .label {
    background-color: #222;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 25px;
    width: 50px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #ccc;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    height: 20px;
    width: 20px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }

  .fa-moon {
    color: #f1c40f;
    font-size: 15px;
  }

  .fa-sun {
    color: #f39c12;
    font-size: 15px;
  }
`;
