import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }
  
ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.card {
  text-align: center;
  padding: 50px;
  border-radius: 20px;
  margin-bottom: 70px;
  border: none;
  background: ${({ theme }) => theme.cardBG};
  box-shadow: ${({ theme }) => theme.cardBoxShd};
}

  body::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

  body::-webkit-scrollbar-track {
  background: rgb(71, 71, 66); /* color of the tracking area */
}

  body::-webkit-scrollbar-thumb {
  background-color: rgb(136, 136, 167); /* color of the scroll thumb */
  border-radius: 30px; /* roundness of the scroll thumb */
  border: 2px solid rgb(71, 71, 66); /* creates padding around scroll thumb */
}


  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    font-family: DM Sans;
    overflow-x: hidden;
    font-weight: 400;
  }

  h2{
       color: ${({ theme }) => theme.h2};
  }
  
  `;
