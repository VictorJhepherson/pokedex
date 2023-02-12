import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "../..";
import theme from "../../../styles/theme";

describe('Card: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Card
        name={`card-test`}
        attributes={{}}
      />
    )

    expect(screen.getByTestId("card-component")).toBeInTheDocument();
  })

  it('should be rendered with all styleProps', () => {
    render(
      <Card
        name={`card-test`}
        attributes={{
          styleProps: {
            hasHover: true,
            cardComponent: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '300px',
              height: '300px',
              marginTop: '30px',
              borderRadius: '20px',
              border: 'none',
              boxShadow: `10px 10px 10px ${theme.colors.black}`,
              backgroundColor: `${theme.colors.white}`,
              cursor: 'pointer',
              transition: '0.6s ease-in-out',
              transform: 'scale(1.09)',
              position: 'static',
            },
            imageCard: {
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '70%',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              backgroundColor: `${theme.colors.primary}`,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("card-component")).toBeInTheDocument();
  })

  it('should be rendered without transform in styleProps for to check hover', () => {
    render(
      <Card
        name={`card-test`}
        attributes={{
          styleProps: {
            hasHover: true,
            cardComponent: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '300px',
              height: '300px',
              marginTop: '30px',
              borderRadius: '20px',
              border: 'none',
              boxShadow: `10px 10px 10px ${theme.colors.black}`,
              backgroundColor: `${theme.colors.white}`,
              cursor: 'pointer',
              transition: '0.6s ease-in-out',
              position: 'static',
            },
            imageCard: {
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '70%',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
              backgroundColor: `${theme.colors.primary}`,
            }
          }
        }}
      />
    )

    expect(screen.getByTestId("card-component")).toBeInTheDocument();
  })

  it('should be rendered with children', () => {
    render(
      <Card
        name={`card-test`}
        attributes={{}}
      >
        <span data-testid="span-test">Hello World!</span>
      </Card>
    )

    expect(screen.getByTestId("card-component")).toBeInTheDocument();
    expect(screen.getByTestId("span-test")).toBeInTheDocument();
  })
})
