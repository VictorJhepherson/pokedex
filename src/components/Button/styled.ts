import styled, { css } from "styled-components";
import theme from "../../styles/theme";

import { IStyleProps } from "../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const ButtonComponent = styled.button<IProps>`
  ${({ styleProps }) => css`
    display: flex;
    align-items: ${styleProps && styleProps.buttonComponent.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.buttonComponent.justifyContent || 'center'};

    margin-top: ${styleProps && styleProps.buttonComponent.marginTop || '0' };

    cursor: pointer;
    transition: ${styleProps && styleProps.buttonComponent.transition || '0.6s ease-in-out'};

    &:hover {
      transform: ${styleProps && styleProps.buttonComponent.transform || 'scale(1.09)'};
    }

    ${styleProps && styleProps.type === "circle" ? css`
        width: ${styleProps && styleProps.buttonComponent.width || '40px' };
        height: ${styleProps && styleProps.buttonComponent.height || '40px' };
        padding: ${styleProps && styleProps.buttonComponent.padding || '2px' };
        margin-right: ${styleProps && styleProps.buttonComponent.marginRight || '0'};
        margin-left: ${styleProps && styleProps.buttonComponent.marginLeft || '20px'};

        background-color: ${styleProps && styleProps.buttonComponent.backgroundColor || theme.colors.primary};
        border-radius: ${styleProps && styleProps.buttonComponent.borderRadius || '50%'};
        border: ${styleProps && styleProps.buttonComponent.border || 'none'};
        box-shadow: ${styleProps && styleProps.buttonComponent.boxShadow || '0 0 0 0'};
        outline: 0;
      ` : css`
        width: ${styleProps && styleProps.buttonComponent.width || '200px' };
        height: ${styleProps && styleProps.buttonComponent.height || '40px' };
        padding: ${styleProps && styleProps.buttonComponent.padding || '10px' };

        font-family: ${styleProps && styleProps.buttonComponent.fontFamily || theme.font.fontFamily};
        color: ${styleProps && styleProps.buttonComponent.color || theme.colors.white};

        background-color: ${styleProps && styleProps.buttonComponent.backgroundColor || theme.colors.primary};
        border-radius: ${styleProps && styleProps.buttonComponent.borderRadius || '11px'};
        border: ${styleProps && styleProps.buttonComponent.border || 'none'};
        box-shadow: ${styleProps && styleProps.buttonComponent.boxShadow || '0 0 0 0'};
        outline: 0;
      `
    }
  `}
`;
