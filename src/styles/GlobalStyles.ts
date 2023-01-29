import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  @font-face {
    font-family: 'Silkscreen';
    font-style: normal;
    font-weight: 300;
    src: local(''),
      url('assets/fonts/Silkscreen-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Silkscreen';
    font-style: normal;
    font-weight: 400;
    src: local(''),
      url('assets/fonts/Silkscreen-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Silkscreen';
    font-style: normal;
    font-weight: 700;
    src: local(''),
      url('assets/fonts/Silkscreen-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Silkscreen';
    font-style: normal;
    font-weight: 900;
    src: local(''),
      url('assets/fonts/Silkscreen-Bold.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html{
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: ${() => theme.font.fontFamily}, serif;
    font-size: 1.6rem;
    background-color: ${() => theme.colors.white};
  }
`;
