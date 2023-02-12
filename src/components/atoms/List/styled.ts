import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

import { IStyleProps } from "../../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const ListComponent = styled.div<IProps>`
  ${({ styleProps }) => css`
    display: flex;
    align-items: ${styleProps && styleProps.listComponent.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.listComponent.justifyContent || 'space-around'};
    flex-wrap: ${styleProps && styleProps.listComponent.flexWrap || 'wrap'};

    width: ${styleProps && styleProps.listComponent.width || '100%'};
    padding: ${styleProps && styleProps.listComponent.padding || '20px'};

    background-color: ${styleProps && styleProps.listComponent.backgroundColor || theme.colors.transparent};

    font-family: ${styleProps && styleProps.listComponent.fontFamily || theme.font.fontFamily};
  `}
`;
