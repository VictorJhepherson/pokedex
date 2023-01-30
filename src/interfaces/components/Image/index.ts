import React from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface IImageStyleProps extends IStyleProps {
  hasHover: boolean;
}


interface IImageAttributes {
  src: string;
  styleProps?: IImageStyleProps;
}

export interface IImageProps extends IDefaultProps {
  attributes: IImageAttributes;
}
