import React from "react";
import { FooterComponent } from "./styled";
import theme from "../../../styles/theme";

import { IFooterProps } from "../../../interfaces";

import { Text } from "../..";

const Footer: React.FC<IFooterProps> = ({ name, attributes, children }) => {
  const { text, styleProps } = attributes;

  const getDate = () => {
    return new Date().getFullYear().toLocaleString("pt-BR").replace(/\./g, "");
  }

  return (
    <FooterComponent id={name} styleProps={styleProps} data-testid="footer-component">
      <>
        <Text
          name={`text-footer`}
          attributes={{
            text: text ? `Copyright © ${getDate()} ${text}` : '',
            styleProps: styleProps,
          }}
        />

        {children ? children : <></>}
      </>
    </FooterComponent>
  )
}

export default Footer;
