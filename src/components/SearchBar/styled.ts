import styled, { css } from "styled-components";
import theme from "../../styles/theme";

import { IStyleProps } from "../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps
}

export const Container = styled.div<IProps>`
  ${({ styleProps }) => css`
    display: flex;
    align-items: ${styleProps && styleProps.containerComponent.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.justifyContent || 'center'};

    width: ${styleProps && styleProps.containerComponent.width || '100%'};
    height: ${styleProps && styleProps.containerComponent.height || '80px' };
    padding: ${styleProps && styleProps.containerComponent.padding || '20px' };

    background-color: ${styleProps && styleProps.containerComponent.backgroundColor || theme.colors.transparent};
  `}
`;
