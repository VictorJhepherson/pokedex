import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;
    padding: 20px;
    min-height: 100vh;

    background-color: ${theme.colors.white};

    font-family: ${theme.font.fontFamily};
  `}
`;

export const Title = styled.h1`
  ${() => css`
    font-family: ${theme.font.fontFamily};
    font-weight: bold;
    font-size: ${theme.font.size.xxlarge};
    margin-left: 20px;
  `}
`;
