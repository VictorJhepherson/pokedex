import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
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
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("search-bar-container")).toBeInTheDocument();
    expect(container.querySelector("div")?.querySelector("label")).toHaveAttribute("id", "input-search-bar");
  })
})
