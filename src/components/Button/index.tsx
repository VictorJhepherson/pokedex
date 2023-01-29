import React from "react";
import { IconType } from "react-icons";
import { FaArrowRight, FaArrowLeft, FaBackspace } from "react-icons/fa";
import { ButtonComponent } from "./styled";
import theme from "../../styles/theme";

import { IButtonProps } from "../../interfaces";

import { Text } from '../';

const Button: React.FC<IButtonProps> = ({ name, attributes }) => {
  const { onClick, text, icon, iconColor, loading, styleProps } = attributes;

  const icons = {
    "arrowRight": FaArrowRight,
    "arrowLeft": FaArrowLeft,
    "backSpace": FaBackspace,
  }

  const Icon: IconType = icons[icon as keyof IconType];

  return (
    <ButtonComponent id={name} onClick={onClick} styleProps={styleProps} data-testid="button-component">
      {styleProps && styleProps.type && icon ?
        <Icon id={`icon-button`} color={iconColor ? iconColor : theme.colors.white} data-testid="icon-button" />
        :
        <Text
          name={`text-button`}
          attributes={{
            text: text ? text : '',
            styleProps: {
              textComponent: {
                fontFamily: theme.font.fontFamily,
                fontSize: theme.font.size.medium,
                fontWeight: theme.font.bold,
                color: theme.colors.white,
              }
            }
          }}
        />
      }
    </ButtonComponent>
  )
}

export default Button;
