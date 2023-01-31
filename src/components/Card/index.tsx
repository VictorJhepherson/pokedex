import React from "react";
import { CardComponent } from "./styled";

import { ICardProps } from "../../interfaces";

const Card: React.FC<ICardProps> = ({ name, attributes, children }) => {
  const { onClick, isLoading, styleProps } = attributes;

  return (
    <CardComponent id={name} onClick={onClick} styleProps={styleProps} data-testid="card-component">
      {children ? children : <></>}
    </CardComponent>
  )
}

export default Card;
