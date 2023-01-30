import React from "react";
import { ImageComponent } from "./styled";

import { IImageProps } from "../../interfaces";

const Image: React.FC<IImageProps> = ({ name, attributes }) => {
  const { src, styleProps } = attributes;

  return (
    <ImageComponent
      id={name}
      styleProps={styleProps}
      src={src}
      data-testid="image-component"
    />
  )
}

export default Image;
