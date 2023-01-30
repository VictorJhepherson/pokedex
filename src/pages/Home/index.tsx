import React, { useState } from "react";
import { toast } from "react-toastify";
import { Container } from "./styled";
import theme from "../../styles/theme";

import { SearchBar, Toggle, Text, Button, Input } from "../../components";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [toggleOn, setToggleOn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleAlert = () => {
    toast('Uma alerta pra você!', {
      toastId: `ID-info-light`,
      type: 'error',
      position: 'top-right',
      autoClose: 5000,
      theme: 'dark',
    })
  }

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
          onClick: handleAlert,
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
          styleProps: {
            labelComponent: {
              alignItems: 'flex-start',
            },
            inputArea: {},
            inputComponent: {},
          }
        }}
      />
    </Container>
  );
}
