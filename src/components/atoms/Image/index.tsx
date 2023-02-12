import React from "react";
import { ImageComponent } from "./styled";

import { IImageProps } from "../../../interfaces";

const Image: React.FC<IImageProps> = ({ name, attributes }) => {
  const { src, onClick, styleProps } = attributes;

  return (
    <ImageComponent
      id={name}
      styleProps={styleProps}
      src={src}
      onClick={onClick}
      data-testid="image-component"
    />
  )
}

export default Image;
