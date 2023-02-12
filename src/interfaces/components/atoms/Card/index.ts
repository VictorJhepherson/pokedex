import React from "react";
import { IDefaultProps, IStyleProps } from "../../global";

interface ICardStylesProps extends IStyleProps {
  hasHover: boolean;
}

interface ICardAttributes {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  isLoading?: boolean;
  styleProps?: ICardStylesProps;
}

export interface ICardProps extends IDefaultProps {
  attributes: ICardAttributes;
}
