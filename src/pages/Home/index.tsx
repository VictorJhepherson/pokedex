import React, { useState } from "react";
import { Container } from "./styled";
import theme from "../../styles/theme";

import { SearchBar, Toggle, Text, Button, Input } from "../../components";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [toggleOn, setToggleOn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  return (
    <Container>
      <Text
        name={"title-home"}
        attributes={{
          text: "React Default Project",
          styleProps: {
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.xxlarge,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
      <SearchBar
        name={"search-bar"}
        attributes={{
          searchValue: searchValue,
          setSearchValue: setSearchValue,
        }}
      />

      <Toggle
        name={"toggle"}
        attributes={{
          toggleOn: toggleOn,
          setToggleOn: setToggleOn,
        }}
      />

      <Button
        name={`button-home`}
        attributes={{
          text: 'Enviar',
          styleProps: {
            type: 'normal',
            buttonComponent: {
              marginTop: '20px',
            }
          }
        }}
      />

      <Input
        name={`input-home`}
        attributes={{
          setInputValue: setInputValue,
          value: inputValue,
          placeholder: "Digite seu nome...",
          required: true,
          label: "Nome:",
        }}
      />
      <Input
        name={`input-home-2`}
        attributes={{
          setInputValue: setInputValue2,
          value: inputValue2,
          placeholder: "Digite seu sobrenome...",
          required: true,
          label: "Sobrenome:",
        }}
      />
    </Container>
  );
}
