import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelectorMockWitoutValue, useSelectorMockWithValue } from "../../__mocks__";
import { Home } from "../";

let useSelectorSpy = useSelectorMockWithValue

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => useSelectorSpy,
}))

jest.mock('../../store/features', () => ({
  getPokemons: () => jest.fn(),
  getPokemonByName: () => jest.fn(),
}))

jest.mock('../../store/reducers', () => ({
  pokemonsSelector: () => jest.fn(),
  deletePokemons: () => jest.fn(),
}))

describe('Home Screen: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Home />
    )

    expect(screen.getByTestId("home-screen")).toBeInTheDocument();
  })

  it('should be rendered with click on Header', () => {
    Object.defineProperty(window, 'location', {
      value: {
        reload: jest.fn(),
      }
    });

    const { container } = render(
      <Home />
    )

    const imageHeader = container.querySelector("div")?.querySelector("#header-home")?.querySelector("img") as HTMLElement;

    fireEvent.click(imageHeader);

    expect(screen.getByTestId("home-screen")).toBeInTheDocument();
  })

  it('should be rendered and SearchBar clicked in searchButton', () => {
   render(
      <Home />
    )

    const SearchButton = screen.getByTestId("input-area").querySelector("#search-button-input") as HTMLElement;

    fireEvent.click(SearchButton);

    expect(screen.getByTestId("home-screen")).toBeInTheDocument();
  })

  it('should be rendered and SearchBar changed', () => {
    render(
       <Home />
     )

     const InputComponent = screen.getByTestId("input-component");

     fireEvent.change(InputComponent, { target: { value: "Hello World!" } });
     fireEvent.change(InputComponent, { target: { value: "" } });

     expect(screen.getByTestId("home-screen")).toBeInTheDocument();
   })

   it('should be rendered and SearchBar clicked in clearButton', () => {
    render(
       <Home />
     )

     const InputComponent = screen.getByTestId("input-component");
     fireEvent.change(InputComponent, { target: { value: "Hello World!" } });

     const ClearButton = screen.getByTestId("input-area").querySelector("#clear-button-input") as HTMLElement;
     fireEvent.click(ClearButton);

     expect(screen.getByTestId("home-screen")).toBeInTheDocument();
   })

   it('should be rendered with scrolling method', () => {
    render(
      <Home />
    )

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    expect(screen.getByTestId("home-screen")).toBeInTheDocument();
  })

   it('should be rendered as default with useSelector falsy', () => {
    useSelectorSpy = useSelectorMockWitoutValue;

    render(
      <Home />
    )

    expect(screen.getByTestId("home-screen")).toBeInTheDocument();
  })
})
