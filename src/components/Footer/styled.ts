import styled, { css } from "styled-components";
import theme from "../../styles/theme";

import { IStyleProps } from "../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const FooterComponent = styled.footer<IProps>`
  ${({ styleProps }) => css`
    position: absolute;

    display: flex;
    align-items: ${styleProps && styleProps.footerComponent.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.footerComponent.justifyContent || 'center'};

    width: ${styleProps && styleProps.footerComponent.width || '100%'};
    height: ${styleProps && styleProps.footerComponent.height || '80px'};
    padding: ${styleProps && styleProps.footerComponent.padding || '20px'};
    bottom: 0;

    background-color: ${styleProps && styleProps.footerComponent.backgroundColor || theme.colors.transparent};
  `}
`;
