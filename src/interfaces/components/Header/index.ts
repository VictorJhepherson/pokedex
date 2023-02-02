import React from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface IHeaderAttributes {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  logoPath?: string;
  styleProps?: IStyleProps;
}

export interface IHeaderProps extends IDefaultProps {
  attributes: IHeaderAttributes;
}
