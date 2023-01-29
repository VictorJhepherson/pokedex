import styled, { css } from "styled-components";
import theme from "../../styles/theme";

import { IStyleProps } from "../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const ToggleSwitch = styled.label<IProps>`
  ${({ styleProps }) => css`
    position: relative;
    display: inline-block;

    width: ${styleProps && styleProps.toggleSwitch.width || '36px'};
    height: ${styleProps && styleProps.toggleSwitch.height || '22px'};
  `}
`;

export const ToggleInput = styled.input<IProps>`
  ${({ styleProps }) => css`
    width: ${styleProps && styleProps.toggleInput.width || '0'};
    height: ${styleProps && styleProps.toggleInput.height || '0'};

    opacity: ${styleProps && styleProps.toggleInput.opacity || '0'};

    &:checked {
      + #toggle-slider {
        background-color: ${styleProps && styleProps.toggleInput.backgroundColor || theme.colors.primary};

        &::before {
          -webkit-transform: translateX(calc(14px));
          -ms-tranform: translateX(calc(14px));
          transform: translateX(calc(14px));

          border-color: ${styleProps && styleProps.toggleInput.borderColor || theme.colors.primary};
        }
      }
    }

    &:focus {
      + #toggle-slider {
        box-shadow: ${styleProps && styleProps.toggleInput.boxShadow || `0 0 1px ${theme.colors.primary}`};
      }
    }
  `}
`;

export const ToggleSlider = styled.span<IProps>`
  ${({ styleProps }) => css`
    position: absolute;

    width: ${styleProps && styleProps.toggleSlider.width || '36px'};
    height: ${styleProps && styleProps.toggleSlider.height || '22px'};
    top: ${styleProps && styleProps.toggleSlider.top || '0'};
    left: ${styleProps && styleProps.toggleSlider.left || '0'};
    right: ${styleProps && styleProps.toggleSlider.right || '0'};
    bottom: ${styleProps && styleProps.toggleSlider.bottom || '0'};

    background-color: ${styleProps && styleProps.toggleSlider.backgroundColor || theme.colors.gray};
    border-radius: ${styleProps && styleProps.toggleSlider.borderRadius || '11px'};

    cursor: pointer;
    -webkit-transition: ${styleProps && styleProps.toggleSlider.transition || '0.4s'};
    transition: ${styleProps && styleProps.toggleSlider.transition || '0.4s'};

    &::before {
      position: absolute;

      width: ${styleProps && styleProps.toggleSlider.width || '22px'};
      height: ${styleProps && styleProps.toggleSlider.height || '22px'};
      top: ${styleProps && styleProps.toggleSlider.top || '0'};
      left: ${styleProps && styleProps.toggleSlider.left || '0'};
      right: ${styleProps && styleProps.toggleSlider.right || '0'};

      background-color: ${styleProps && styleProps.toggleSlider.backgroundColor || theme.colors.white};
      border-radius: ${styleProps && styleProps.toggleSlider.borderRadius || '50%'};
      border: ${styleProps && styleProps.toggleSlider.border || `2px solid ${theme.colors.gray}`};
      box-sizing: ${styleProps && styleProps.toggleSlider.boxSizing || 'border-box'};

      content: "";
      -webkit-transition: ${styleProps && styleProps.toggleSlider.transition || '0.4s'};
      transition:${styleProps && styleProps.toggleSlider.transition || '0.4s'};
    }
  `}
`;
