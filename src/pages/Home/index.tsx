import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Content } from "./styled";
import theme from "../../styles/theme";

import { PAGINATE, isMobile } from "../../utils";

import { getPokemons, getPokemonByName } from "../../store/features";
import { pokemonsSelector, deletePokemons } from "../../store/reducers";

import { Header, SearchBar, Text, PokemonList, Footer } from "../../components";

export default function Home() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const pokemons = useSelector(pokemonsSelector);

  const isScrollingMethod = () => {
    if ((document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight) setOffset(offset + PAGINATE);
  }

  useEffect(() => {
    setIsLoading(true);
    if (searchValue.length === 0) getPokemons(dispatch, { offset: offset });

    if (pokemons.data.length !== 0) setIsLoading(false);

    window.addEventListener('scroll', isScrollingMethod);
    return () => window.removeEventListener('scroll', isScrollingMethod);
  }, [offset]);

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
            imageComponent: {
              transform: 'rotate(180deg)'
            },
          }
        }}
      />

      <Content isMobile={isMobile ? 1 : 0}>
        <Text
          name={"title-home"}
          attributes={{
            text: "Pokedex",
            styleProps: {
              textComponent: {
                fontFamily: theme.font.fontFamily,
                fontSize: isMobile ? theme.font.size.xlarge : theme.font.size.xxlarge,
                fontWeight: theme.font.bold,
                color: theme.colors.black,
                margin: '20px',
                textAlign: 'flex-start'
              }
            }
          }}
        />
        <SearchBar
          name={"search-bar"}
          attributes={{
            searchValue: searchValue,
            setSearchValue: setSearchValue,
            onClick: () => {
              dispatch(deletePokemons({}));
              getPokemonByName(dispatch, searchValue.toLowerCase())
            },
            onClear: () => {
              setOffset(0)
              dispatch(deletePokemons({}));
              getPokemons(dispatch, { offset: 0 })
            },
            onChange: (e) => {
              setSearchValue(e.target.value)

              if (e.target.value.length === 0) {
                setOffset(0)
                dispatch(deletePokemons({}));
                getPokemons(dispatch, { offset: 0 })
              }
            },
            styleProps: {
              containerComponent: {},
              labelComponent: {
                marginTop: '0',
                alignItems: 'flex-start',
              },
              inputArea: {
                width: isMobile ? '90%' : '65%',
                justifyContent: 'flex-start',
              },
              inputComponent: {
                width: isMobile ? '90%' : '65%',
              }
            }
          }}
        />
      </Content>

      <PokemonList
        name={`list-pokemons`}
        attributes={{
          pokemons: pokemons,
          isLoading: isLoading,
          styleProps: {
            listComponent: {
              width: '100%',
            },
          }
        }}
      />

      <Footer
        name="footer-home"
        attributes={{
          text: process.env.REACT_APP_AUTHOR || 'Victor Jhepherson',
          styleProps: {
            footerComponent: {
              height: '150px',
            },
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
