import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme";
import { Button } from "../";

describe('Button: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Button
        name={`button-test`}
        attributes={{
          text: 'Test',
          styleProps: {
            type: 'normal',
            buttonComponent: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("button-component")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  })

  it('should have styleProps for all styles in button type normal', () => {
    render(
      <Button
        name={`button-test`}
        attributes={{
          text: 'Test',
          styleProps: {
            type: 'normal',
            buttonComponent: {
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '0',
              transition: '0.6s ease-in-out',
              transform: 'scale(1.2)',
              width: '40px',
              height: '40px',
              padding: '2px',
              marginRight: '0',
              marginLeft: '20px',
              backgroundColor: '#CC0000',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0 0 0 0',
              fontFamily: 'Silkscreen',
              color: '#FFFFFF',
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
    )

    expect(screen.getByTestId("button-component")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  })

  it('should have a h1 tag by default even not sending the text attribute', () => {
    const { container } = render(
      <Button
        name={`button-test`}
        attributes={{
          styleProps: {
            type: 'normal',
            buttonComponent: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("button-component")).toBeInTheDocument();
    expect(container.querySelector("button")?.querySelector("h1")).toBeInTheDocument();
  })

  it('should have an icon with color white in button with type circle', () => {
    render(
      <Button
        name={`button-test`}
        attributes={{
          icon: FaArrowRight,
          iconColor: 'white',
          styleProps: {
            type: 'circle',
            buttonComponent: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("button-component")).toBeInTheDocument();
    expect(screen.getByTestId("icon-button")).toBeInTheDocument();
    expect(screen.getByTestId("icon-button")).toHaveAttribute("color", "white");
  })

  it('should be a white icon on the button with the circle type even without sending the iconColor attribute', () => {
    render(
      <Button
        name={`button-test`}
        attributes={{
          icon: FaArrowRight,
          styleProps: {
            type: 'circle',
            buttonComponent: {},
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("button-component")).toBeInTheDocument();
    expect(screen.getByTestId("icon-button")).toBeInTheDocument();
    expect(screen.getByTestId("icon-button")).toHaveAttribute("color", "#FFFFFF");
  })

  it('should have styleProps for all styles in button type circle', () => {
    render(
      <Button
        name={`button-test`}
        attributes={{
          icon: FaArrowRight,
          iconColor: 'white',
          styleProps: {
            type: 'circle',
            buttonComponent: {
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '0',
              transition: '0.6s ease-in-out',
              transform: 'scale(1.2)',
              position: 'static',
              left: 'auto',
              right: 'auto',
              bottom: 'auto',
              top: 'auto',
              width: '40px',
              height: '40px',
              padding: '2px',
              marginRight: '0',
              marginLeft: '20px',
              backgroundColor: '#CC0000',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0 0 0 0',
              fontFamily: 'Silkscreen',
              color: '#FFFFFF',
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
    )

    expect(screen.getByTestId("button-component")).toBeInTheDocument();
    expect(screen.getByTestId("icon-button")).toBeInTheDocument();
  })
})
