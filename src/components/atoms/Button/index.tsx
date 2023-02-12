import React from "react";
import { IconType } from "react-icons";
import { ButtonComponent } from "./styled";
import theme from "../../../styles/theme";

import { IButtonProps } from "../../../interfaces";

import { Text } from '../..';

const Button: React.FC<IButtonProps> = ({ name, attributes }) => {
  const { onClick, text, icon, iconColor, loading, styleProps } = attributes;

  const Icon = icon as IconType;

  return (
    <ButtonComponent id={name} onClick={onClick} styleProps={styleProps} data-testid="button-component">
      {styleProps && styleProps.type && icon ?
        <Icon id={`icon-button`} color={iconColor ? iconColor : theme.colors.white} data-testid="icon-button" />
        :
        <Text
          name={`text-button`}
          attributes={{
            text: text ? text : '',
            styleProps: styleProps
          }}
        />
      }
    </ButtonComponent>
  )
}

export default Button;
