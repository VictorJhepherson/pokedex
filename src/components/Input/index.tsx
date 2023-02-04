import React from "react";
import { FaArrowRight, FaBackspace } from "react-icons/fa";
import { Label, InputArea, InputComponent } from "./styled";
import theme from "../../styles/theme";

import { IInputProps } from "../../interfaces";

import { Text, Button } from '../';

const Input: React.FC<IInputProps> = ({ name, attributes }) => {
  const {
    setInputValue,
    onFocus,
    onBlur,
    placeholder,
    value,
    required,
    type = "text",
    label,
    hasClearButton = true,
    hasSearchButton = false,
    styleProps,
  } = attributes;

  const handleOnClear = () => {
    setInputValue("");
  };

  return (
    <Label id={name} styleProps={styleProps} data-testid="input-label">
      {label ?
        <Text
          name={`input-text`}
          attributes={{
            text: label,
            styleProps: styleProps
          }}
        />
      : <></>}
      <InputArea styleProps={styleProps} data-testid="input-area">
        <InputComponent
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          styleProps={styleProps}
          data-testid="input-component"
        />

        {hasClearButton && value && (
          <Button
            name={`clear-button-input`}
            attributes={{
              onClick: handleOnClear,
              icon: FaBackspace,
              iconColor: 'white',
              styleProps: {
                type: 'circle',
                buttonComponent: {
                  width: '30px',
                  height: '30px',
                  marginRight: '5px',
                  marginLeft: '-35px',
                }
              }
            }}
          />
        )}

        {hasSearchButton && (
          <Button
            name={`search-button-input`}
            attributes={{
              icon: FaArrowRight,
              iconColor: 'white',
              styleProps: {
                type: 'circle',
                buttonComponent: {}
              }
            }}
          />
        )}
      </InputArea>
    </Label>
  )
}

export default Input;
