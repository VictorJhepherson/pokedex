import React from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface IHeaderAttributes {
  logoPath?: string;
  styleProps?: IStyleProps;
}

export interface IHeaderProps extends IDefaultProps {
  attributes: IHeaderAttributes;
}
