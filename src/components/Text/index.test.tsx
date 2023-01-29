import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Text } from "../";

describe('Text: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Text
        name={`text-test`}
        attributes={{
          text: "Text test",
        }}
      />
    )

    expect(screen.getByTestId("text-component")).toBeInTheDocument();
  })

  it('should be rendered with all styleProps', () => {
    render(
      <Text
        name={`text-test`}
        attributes={{
          text: "Text test",
          styleProps: {
            textComponent: {
              fontFamily: 'Silkscreen',
              fontSize: '1.4rem',
              fontWeight: 'normal',
              color: '#000000',
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("text-component")).toBeInTheDocument();
  })
})
