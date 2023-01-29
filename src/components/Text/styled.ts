import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { IStyleProps } from "../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const TextComponent = styled.h1<IProps>`
  ${({ styleProps }) => css`
    font-family: ${styleProps && styleProps.textComponent.fontFamily || theme.font.fontFamily};
    font-size: ${styleProps && styleProps.textComponent.fontSize || theme.font.size.medium};
    font-weight: ${styleProps && styleProps.textComponent.fontWeight || 'normal'};

    color: ${styleProps && styleProps.textComponent.color || theme.colors.black};
  `}
`;
