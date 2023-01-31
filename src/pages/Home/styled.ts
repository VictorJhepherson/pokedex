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
  `}
`;
