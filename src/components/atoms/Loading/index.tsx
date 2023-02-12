import React from "react";
import { LoadingComponent } from "./styled";

import { ILoadingProps } from "../../../interfaces";

const Loading: React.FC<ILoadingProps> = ({ name, attributes }) => {
  const { styleProps } = attributes;

  return (
    <LoadingComponent
      id={name}
      src={`assets/img/pokeball.gif`}
      loading={`lazy`}
      styleProps={styleProps}
      data-testid="loading-component"
    />
  )
}

export default Loading;
