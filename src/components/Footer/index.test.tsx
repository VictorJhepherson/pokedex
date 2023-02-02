import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "../";
import theme from "../../styles/theme";

describe('Footer: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Footer
        name={`footer-test`}
        attributes={{
          text: 'Test'
        }}
      />
    )

    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  })

  it('should be rendered without text', () => {
    render(
      <Footer
        name={`footer-test`}
        attributes={{}}
      />
    )

    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  })

  it('should be rendered with all stylesProps', () => {
    render(
      <Footer
        name={`footer-test`}
        attributes={{
          text: 'test',
          styleProps: {
            footerComponent: {
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '80px',
              padding: '20px',
              backgroundColor: theme.colors.transparent,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  })

  it('should be rendered with children', () => {
    render(
      <Footer
        name={`footer-test`}
        attributes={{
          text: 'test',
        }}
      >
        <span data-testid="span-test">Hello World!</span>
      </Footer>
    )

    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
    expect(screen.getByTestId("span-test")).toBeInTheDocument();
  })
})
