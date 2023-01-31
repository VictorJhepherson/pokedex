import styled, { css } from "styled-components";
import theme from "../../styles/theme";

import { IStyleProps } from "../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const HeaderComponent = styled.header<IProps>`
  ${({ styleProps }) => css`
    display: flex;
    align-items: ${styleProps && styleProps.headerComponent.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.headerComponent.justifyContent || 'center'};

    width: ${styleProps && styleProps.headerComponent.width || '100%'};
    height: ${styleProps && styleProps.headerComponent.height || '50px'};
    padding: ${styleProps && styleProps.headerComponent.padding || '20px'};

    background-color: ${styleProps && styleProps.headerComponent.backgroundColor || theme.colors.primary};

    img {
      width: ${styleProps && styleProps.imageHeader.width || '40px'};
      height: ${styleProps && styleProps.imageHeader.height || '40px'};

      cursor: ${styleProps && styleProps.imageHeader.cursor || 'pointer'};
    }
  `}
`;
