import React from "react";
import { IDefaultProps, IStyleProps } from "../global";
import { ButtonTypes } from "../../types";

interface IButtonStylesProps extends IStyleProps {
  type: ButtonTypes;
}

interface IButtonAttributes {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  icon?: string;
  iconColor?: string;
  loading?: boolean;
  styleProps?: IButtonStylesProps;
}

export interface IButtonProps extends IDefaultProps {
  attributes: IButtonAttributes;
}
