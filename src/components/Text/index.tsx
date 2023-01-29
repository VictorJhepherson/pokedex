import React from "react";
import { TextComponent } from "./styled";

import { ITextProps } from "../../interfaces";

const Text: React.FC<ITextProps> = ({ name, attributes }) => {
  const { text, styleProps } = attributes;

  return (
    <TextComponent id={name} styleProps={styleProps} data-testid="text-component">
      {text}
    </TextComponent>
  )
}

export default Text;
