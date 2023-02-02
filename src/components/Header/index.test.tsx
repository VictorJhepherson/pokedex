import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../";
import theme from "../../styles/theme";

describe('Header: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Header
        name={`header-test`}
        attributes={{}}
      />
    )

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
  })

  it('should be rendered with logo', () => {
    render(
      <Header
        name={`header-test`}
        attributes={{
          logoPath: 'assets/img/logo.svg',
        }}
      />
    )

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("id", "image-header-test");
  })

  it('should be rendered with children', () => {
    render(
      <Header
        name={`header-test`}
        attributes={{}}
      >
        <span data-testid="span-test">Hello World!</span>
      </Header>
    )

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
    expect(screen.getByTestId("span-test")).toBeInTheDocument();
  })

  it('should be rendered with logo and click event', () => {
    render(
      <Header
        name={`header-test`}
        attributes={{
          logoPath: 'assets/img/logo.svg',
        }}
      />
    )

    const image = screen.getByRole("img");

    fireEvent.click(image);

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("id", "image-header-test");
  })

  it('should be rendered with onClick', () => {
    Object.defineProperty(window, 'location', {
      value: {
        reload: jest.fn(),
      }
    });

    render(
      <Header
        name={`header-test`}
        attributes={{
          onClick: () => window.location.reload(),
        }}
      />
    )

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
  })

  it('should be rendered with all styleProps', () => {
    render(
      <Header
        name={`header-test`}
        attributes={{
          styleProps: {
            headerComponent: {
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '50px',
              padding: '20px',
              backgroundColor: theme.colors.primary,
            },
            imageHeader: {
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
  })
})
