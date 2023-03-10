import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import theme from "../../../styles/theme";
import { Toggle } from "../..";

describe('Toggle: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Toggle
        name={`toggle-test`}
        attributes={{
          textOff: 'Off',
          textOn: 'On',
          toggleOn: false,
          setToggleOn: jest.fn(),
        }}
      />
    )

    expect(screen.getByTestId("toggle-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-switch")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-input")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-slider")).toBeInTheDocument();
  })

  it('should be rendered without textOff and textOn', () => {
    render(
      <Toggle
        name={`toggle-test`}
        attributes={{
          toggleOn: false,
          setToggleOn: jest.fn(),
        }}
      />
    )

    expect(screen.getByTestId("toggle-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-switch")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-input")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-slider")).toBeInTheDocument();
  })

  it('should toggle the value of toggleOn when the toggle input is clicked', () => {
    const spy = jest.fn();

    render(
      <Toggle
        name={`toggle-test`}
        attributes={{
          textOff: 'Off',
          textOn: 'On',
          toggleOn: false,
          setToggleOn: spy,
        }}
      />
    )

    const toggleInput = screen.getByTestId("toggle-input");

    fireEvent.click(toggleInput);
    expect(spy).toHaveBeenCalled();
  })

  it('should be rendered with all styleProps', () => {
    render(
      <Toggle
        name={`toggle-test`}
        attributes={{
          textOff: 'Off',
          textOn: 'On',
          toggleOn: false,
          setToggleOn: jest.fn(),
          styleProps: {
            toggleContainer: {
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '200px',
            },
            toggleSwitch: {
              width: '36px',
              height: '22px',
            },
            toggleInput: {
              width: '0',
              height: '0',
              opacity: '0',
              backgroundColor: '#CC0000',
              borderColor: '#CC0000',
              boxShadow: '0 0 1px #CC0000',
            },
            toggleSlider: {
              width: '36px',
              height: '22px',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: '#DFDFDF',
              borderRadius: '11px',
              transition: '0.4s',
              border: '2px solid #DFDFDF',
              boxSizing: 'border-box',
            },
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          },
        }}
      />
    )

    expect(screen.getByTestId("toggle-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-switch")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-input")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-slider")).toBeInTheDocument();
  })
})
