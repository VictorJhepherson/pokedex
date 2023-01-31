import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { List } from "../";
import theme from "../../styles/theme";

describe('List: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <List
        name={`list-test`}
        attributes={{}}
      />
    )

    expect(screen.getByTestId("list-component")).toBeInTheDocument();
  })


  it('should be rendered with all styleProps', () => {
    render(
      <List
        name={`list-test`}
        attributes={{
          styleProps: {
            listComponent: {
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              width: '100px',
              padding: '20px',
              backgroundColor: theme.colors.transparent,
              fontFamily: theme.font.fontFamily,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("list-component")).toBeInTheDocument();
  })

  it('should be rendered with children', () => {
    render(
      <List
        name={`list-test`}
        attributes={{}}
      >
        <span data-testid="span-test">Hello World!</span>
      </List>
    )

    expect(screen.getByTestId("list-component")).toBeInTheDocument();
    expect(screen.getByTestId("span-test")).toBeInTheDocument();
  })
})
