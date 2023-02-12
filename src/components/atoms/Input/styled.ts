import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

import { IStyleProps } from "../../../interfaces/components/global";

interface IProps {
  styleProps?: IStyleProps;
}

export const Label = styled.label<IProps>`
  ${({ styleProps }) => css`
    display: flex;
    flex-direction: ${styleProps && styleProps.labelComponent.flexDirection || 'column'};
    align-items: ${styleProps && styleProps.labelComponent.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.labelComponent.justifyContent || 'center'};

    width: ${styleProps && styleProps.labelComponent.width || '100%'};
    margin-top: ${styleProps && styleProps.labelComponent.marginTop || '10px'};
  `}
`;

export const InputArea = styled.div<IProps>`
  ${({ styleProps }) => css`
    display: flex;
    align-items: ${styleProps && styleProps.inputArea.alignItems || 'center'};
    justify-content: ${styleProps && styleProps.inputArea.justifyContent || 'center'};

    width: ${styleProps && styleProps.inputArea.width || '100%'};

    background-color: ${styleProps && styleProps.inputArea.backgroundColor || theme.colors.transparent};
  `}
`;

export const InputComponent = styled.input<IProps>`
  ${({ styleProps }) => css`
    width: ${styleProps && styleProps.inputComponent.width || '100%'};
    padding: ${styleProps && styleProps.inputComponent.padding || '1rem'};

    background-color: ${styleProps && styleProps.inputComponent.backgroundColor || theme.colors.gray};
    border-radius: ${styleProps && styleProps.inputComponent.borderRadius || '20px'};
    border: ${styleProps && styleProps.inputComponent.border || 'none'};
    box-shadow: ${styleProps && styleProps.inputComponent.boxShadow || '0 0 0 0'};
    outline: 0;
  `}
`;
