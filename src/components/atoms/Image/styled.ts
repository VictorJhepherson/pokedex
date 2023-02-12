import styled, { css } from "styled-components";

import { IStyleProps } from "../../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const ImageComponent = styled.img<IProps>`
  ${({ styleProps }) => css`
    width: ${styleProps && styleProps.imageComponent.width || '100px'};
    height: ${styleProps && styleProps.imageComponent.height || '100px'};

    cursor: ${styleProps && styleProps.imageComponent.cursor || 'default'};

    transition: ${styleProps && styleProps.imageComponent.transition || '0.6s ease-in-out'};

    ${styleProps && styleProps.hasHover && css`
      &:hover {
        transform: ${styleProps && styleProps.imageComponent.transform || 'scale(1.2)'};
      }
    `}
  `}
`;
