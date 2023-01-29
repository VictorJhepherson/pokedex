import React from "react";
import { ToggleSwitch, ToggleInput, ToggleSlider } from "./styled";

import { IToggleProps } from "../../interfaces";

const Toggle: React.FC<IToggleProps> = ({ name, attributes }) => {
  const { toggleOn, setToggleOn, styleProps } = attributes;

  const handleToggleOn = () => {
    setToggleOn(!toggleOn);
  }

  return (
    <ToggleSwitch id={name} styleProps={styleProps} data-testid="toggle-switch">
      <ToggleInput
        id={`toggle-input`}
        type={`checkbox`}
        checked={toggleOn}
        onClick={handleToggleOn}
        styleProps={styleProps}
        data-testid="toggle-input"
      />

      <ToggleSlider id={`toggle-slider`} styleProps={styleProps} data-testid="toggle-slider" />
    </ToggleSwitch>
  )
}

export default Toggle;
