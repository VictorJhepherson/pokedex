import React from "react";
import { Container } from "./styled";

import { ISearchBarProps } from "../../interfaces";

import { Input } from "../";

const SearchBar: React.FC<ISearchBarProps> = ({ name, attributes }) => {
  const { searchValue, setSearchValue, styleProps } = attributes;

  return (
    <Container id={name} styleProps={styleProps} data-testid="search-bar-container">
      <Input
        name={`input-search-bar`}
        attributes={{
          setInputValue: setSearchValue,
          value: searchValue,
          placeholder: "Faça sua busca...",
          required: true,
          hasSearchButton: true,
          styleProps: styleProps
        }}
      />
    </Container>
  );
};

export default SearchBar;
