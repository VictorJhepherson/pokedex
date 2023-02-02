import React from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface IFooterAttributes {
  text?: string;
  styleProps?: IStyleProps;
}

export interface IFooterProps extends IDefaultProps {
  attributes: IFooterAttributes;
}
