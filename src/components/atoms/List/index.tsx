import React from "react";
import { ListComponent } from "./styled";

import { IListProps } from "../../../interfaces";

const List: React.FC<IListProps> = ({ name, attributes, children }) => {
  const { isLoading, styleProps } = attributes;

  return (
    <ListComponent id={name} styleProps={styleProps} data-testid="list-component">
      {children ? children : <></>}
    </ListComponent>
  )
}

export default List;
