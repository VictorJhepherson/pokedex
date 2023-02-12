import React from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface ILoadingAttributes {
  styleProps?: IStyleProps;
}

export interface ILoadingProps extends IDefaultProps {
  attributes: ILoadingAttributes;
}
