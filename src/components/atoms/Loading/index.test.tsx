import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Loading } from "../..";

describe('Loading: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Loading
        name={`loading-test`}
        attributes={{}}
      />
    )

    expect(screen.getByTestId("loading-component")).toBeInTheDocument();
  })

  it('should be rendered with all styleProps', () => {
    render(
      <Loading
        name={`loading-test`}
        attributes={{
          styleProps: {
            loadingComponent: {
              width: '250px',
              margin: '20px'
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("loading-component")).toBeInTheDocument();
  })
})
