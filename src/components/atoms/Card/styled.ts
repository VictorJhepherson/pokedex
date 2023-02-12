import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

import { IStyleProps } from "../../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const CardComponent = styled.div<IProps>`
  ${({ styleProps }) => css`
    display: flex;
    flex-direction: ${styleProps && styleProps.cardComponent.flexDirection || 'column'};
    align-items: ${styleProps && styleProps.cardComponent.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.cardComponent.justifyContent || 'flex-start'};

    width: ${styleProps && styleProps.cardComponent.width || '300px'};
    height: ${styleProps && styleProps.cardComponent.height || '400px'};
    margin-top: ${styleProps && styleProps.cardComponent.marginTop || '30px'};
    margin-bottom: ${styleProps && styleProps.cardComponent.marginBottom || '0'};

    border-radius: ${styleProps && styleProps.cardComponent.borderRadius || '20px'};

    border: ${styleProps && styleProps.cardComponent.border || `none` };
    box-shadow: ${styleProps && styleProps.cardComponent.boxShadow || `10px 10px 10px ${theme.colors.black}`};

    background-color: ${styleProps && styleProps.cardComponent.backgroundColor || theme.colors.white};

    cursor: ${styleProps && styleProps.cardComponent.cursor || 'pointer'};
    transition: ${styleProps && styleProps.cardComponent.transition || '0.6s ease-in-out'};

    position: ${styleProps && styleProps.cardComponent.position || 'static'};

    ${styleProps && styleProps.hasHover && css`
      &:hover {
        transform: ${styleProps && styleProps.cardComponent.transform || 'translateY(-1.3em)'};
      }
    `}

    .image-container {
      display: flex;
      align-items: ${styleProps && styleProps.imageCard.alignItems || 'center'};
      justify-content: ${styleProps && styleProps.imageCard.justifyContent || 'center'};

      width: ${styleProps && styleProps.imageCard.width || '100%'};
      height: ${styleProps && styleProps.imageCard.height || '70%'};

      border-top-left-radius: ${styleProps && styleProps.imageCard.borderTopLeftRadius || '20px'};
      border-top-right-radius: ${styleProps && styleProps.imageCard.borderTopRightRadius || '20px'};
      border-bottom-left-radius: ${styleProps && styleProps.imageCard.borderBottomLeftRadius || '0'};
      border-bottom-right-radius: ${styleProps && styleProps.imageCard.borderBottomRightRadius || '0'};

      background-color: ${styleProps && styleProps.imageCard.backgroundColor || theme.colors.primary};

      cursor: ${styleProps && styleProps.imageCard.cursor || 'pointer'};
    }
  `}
`;
