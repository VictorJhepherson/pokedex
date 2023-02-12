import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

import { IStyleProps } from "../../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const LoadingComponent = styled.img<IProps>`
  ${({ styleProps }) => css`
    display: block;

    width: ${styleProps && styleProps.loadingComponent.width || '250px'};
    margin: ${styleProps && styleProps.loadingComponent.margin || '20px'};
  `}
`;
