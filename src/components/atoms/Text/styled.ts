import styled, { css } from "styled-components";
import theme from "../../../styles/theme";
import { IStyleProps } from "../../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const TextComponent = styled.h1<IProps>`
  ${({ styleProps }) => css`
    position: ${styleProps && styleProps.textComponent.position || 'static'};

    font-family: ${styleProps && styleProps.textComponent.fontFamily || theme.font.fontFamily};
    font-size: ${styleProps && styleProps.textComponent.fontSize || theme.font.size.medium};
    font-weight: ${styleProps && styleProps.textComponent.fontWeight || 'normal'};
    text-align: ${styleProps && styleProps.textComponent.textAlign || 'center'};

    width: ${styleProps && styleProps.textComponent.width || '100%'};
    margin: ${styleProps && styleProps.textComponent.margin || '0'};
    top: ${styleProps && styleProps.textComponent.top || 'auto'};
    bottom: ${styleProps && styleProps.textComponent.bottom || 'auto'};
    left: ${styleProps && styleProps.textComponent.left || 'auto'};
    right: ${styleProps && styleProps.textComponent.right || 'auto'};

    border-radius: ${styleProps && styleProps.textComponent.borderRadius || '5px'};

    color: ${styleProps && styleProps.textComponent.color || theme.colors.black};

    background-color: ${styleProps && styleProps.textComponent.backgroundColor || theme.colors.transparent};
  `}
`;
