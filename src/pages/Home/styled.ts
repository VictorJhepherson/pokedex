import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;

    background-color: ${theme.colors.white};

    font-family: ${theme.font.fontFamily};

    overflow-y: auto;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 16px;

    width: 100%;

    background-color: ${theme.colors.transparent};
  `}
`;

