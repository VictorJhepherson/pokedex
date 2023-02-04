import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme";
import { SearchBar } from "../";

describe('SearchBar: check html tags and render', () => {
  it('should be rendered as default', () => {
    const { container } = render(
      <SearchBar
        name={"search-bar"}
        attributes={{
          searchValue: 'Test',
          setSearchValue: jest.fn(),
        }}
      />
    )

    expect(screen.getByTestId("search-bar-container")).toBeInTheDocument();
    expect(container.querySelector("div")?.querySelector("label")).toHaveAttribute("id", "input-search-bar");
  })

  it('should be rendered with all styleProps', () => {
    const { container } = render(
      <SearchBar
        name={"search-bar"}
        attributes={{
          searchValue: 'Test',
          setSearchValue: jest.fn(),
          styleProps: {
            containerComponent: {
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '80px',
              padding: '20px',
              backgroundColor: 'transparent',
            },
            labelComponent: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: '10px',
            },
            inputArea: {
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: 'transparent',
            },
            inputComponent: {
              padding: '1rem',
              backgroundColor: '#DFDFDF',
              borderRadius: '20px',
              border: 'none',
              boxShadow: '0 0 0 0',
            },
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.small,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
              margin: 'none',
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("search-bar-container")).toBeInTheDocument();
    expect(container.querySelector("div")?.querySelector("label")).toHaveAttribute("id", "input-search-bar");
  })
})
