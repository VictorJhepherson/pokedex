import React from "react";
import { IconType } from "react-icons";
import { IDefaultProps, IStyleProps } from "../../global";
import { ButtonTypes } from "../../../types";

interface IButtonStylesProps extends IStyleProps {
  type: ButtonTypes;
}

interface IButtonAttributes {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  icon?: IconType;
  iconColor?: string;
  loading?: boolean;
  styleProps?: IButtonStylesProps;
}

export interface IButtonProps extends IDefaultProps {
  attributes: IButtonAttributes;
}
