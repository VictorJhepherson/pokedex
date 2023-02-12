import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Image } from "../..";

describe('Image: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Image
        name={`image-test`}
        attributes={{
          src: "assets/img/logo.svg",
        }}
      />
    )

    expect(screen.getByTestId("image-component")).toBeInTheDocument();
  })

  it('should be rendered with all styleProps and hasHover true', () => {
    render(
      <Image
        name={`image-test`}
        attributes={{
          src: "assets/img/logo.svg",
          styleProps: {
            hasHover: true,
            imageComponent: {
              width: '100px',
              height: '100px',
              cursor: 'pointer',
              transition: '0.6s ease-in-out',
              transform: 'scale(1.2)',
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("image-component")).toBeInTheDocument();
  })

  it('should be rendered without transform in styleProps for to check hover', () => {
    render(
      <Image
        name={`image-test`}
        attributes={{
          src: "assets/img/logo.svg",
          styleProps: {
            hasHover: true,
            imageComponent: {
              width: '100px',
              height: '100px',
              cursor: 'pointer',
              transition: '0.6s ease-in-out',
            }
          }
        }}
      />
    )

    fireEvent.mouseOver(screen.getByTestId("image-component"))

    expect(screen.getByTestId("image-component")).toBeInTheDocument();
  })
})
