import React from "react";
import { HeaderComponent } from "./styled";

import { IHeaderProps } from "../../interfaces";

import { Image } from "../";

const Header: React.FC<IHeaderProps> = ({ name, attributes, children }) => {
  const { logoPath, styleProps } = attributes;

  return (
    <HeaderComponent id={name} styleProps={styleProps} data-testid="header-component">
      <>
        {logoPath &&
          <Image
            name={`image-${name}`}
            attributes={{
              src: logoPath,
              onClick: () => window.location.reload(),
            }}
          />
        }

        {children ? children : <></>}
      </>
    </HeaderComponent>
  )
}

export default Header;
