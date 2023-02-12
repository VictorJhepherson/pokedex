import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

export const CardContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 30%;

    background-color: ${theme.colors.transparent};
  `}
`;

export const TypesContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 50%;

    background-color: ${theme.colors.transparent};
  `}
`;
