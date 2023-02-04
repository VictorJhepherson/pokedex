import React, { useState } from "react";
import { Container, Content } from "./styled";
import theme from "../../styles/theme";

import { Header, SearchBar, Text, Footer } from "../../components";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container data-testid="home-screen">
      <Header
        name={`header-home`}
        attributes={{
          onClick: () => window.location.reload(),
          logoPath: 'assets/img/pokemon-logo.png',
          styleProps: {
            headerComponent: {},
            imageHeader: {},
            imageComponent: {},
          }
        }}
      />

      <Content>
        <Text
          name={"title-home"}
          attributes={{
            text: "Pokedex",
            styleProps: {
              textComponent: {
                fontFamily: theme.font.fontFamily,
                fontSize: theme.font.size.xxlarge,
                fontWeight: theme.font.bold,
                color: theme.colors.black,
                margin: '20px',
              }
            }
          }}
        />
        <SearchBar
          name={"search-bar"}
          attributes={{
            searchValue: searchValue,
            setSearchValue: setSearchValue,
            styleProps: {
              containerComponent: {},
              labelComponent: {
                marginTop: '0',
                alignItems: 'flex-start',
              },
              inputArea: {
                width: '65%',
                justifyContent: 'flex-start',
              },
              inputComponent: {
                width: '65%',
              }
            }
          }}
        />
      </Content>

      <Footer
        name="footer-home"
        attributes={{
          text: process.env.REACT_APP_AUTHOR || 'Victor Jhepherson',
          styleProps: {
            footerComponent: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
    </Container>
  );
}
