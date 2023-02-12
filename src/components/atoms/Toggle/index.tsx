import React from "react";
import { ToggleContainer, ToggleSwitch, ToggleInput, ToggleSlider } from "./styled";
import theme from "../../../styles/theme";

import { IToggleProps } from "../../../interfaces";

import { Text } from "../..";

const Toggle: React.FC<IToggleProps> = ({ name, attributes }) => {
  const {toggleOn, setToggleOn, textOn, textOff, styleProps } = attributes;

  const handleToggleOn = () => {
    setToggleOn(!toggleOn);
  }

  return (
    <ToggleContainer id={name} styleProps={styleProps} data-testid="toggle-container">
      {textOff ?
        <Text
          name={`text-toggle-off`}
          attributes={{
            text: textOff,
            styleProps: styleProps
          }}
        />
        :
        <></>
      }

      <ToggleSwitch id={`${name}-toggle-switch`} styleProps={styleProps} data-testid="toggle-switch">
        <ToggleInput
          id={`toggle-input`}
          type={`checkbox`}
          checked={toggleOn}
          onChange={handleToggleOn}
          styleProps={styleProps}
          data-testid="toggle-input"
        />

        <ToggleSlider id={`toggle-slider`} styleProps={styleProps} data-testid="toggle-slider" />
      </ToggleSwitch>

      {textOn ?
        <Text
          name={`text-toggle-on`}
          attributes={{
            text: textOn,
            styleProps: styleProps
          }}
        />
        :
        <></>
      }
    </ToggleContainer>
  )
}

export default Toggle;
