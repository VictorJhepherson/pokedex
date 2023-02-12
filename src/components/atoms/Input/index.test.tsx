import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import theme from "../../../styles/theme";
import { Input } from "../..";

describe('Input: check html tags and render', () => {
  it('should be rendered as default', () => {
    const { container } = render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
          label: "Test:",
        }}
      />
    )

    expect(screen.getByTestId("input-label")).toBeInTheDocument();
    expect(screen.getByTestId("input-area")).toBeInTheDocument();
    expect(screen.getByTestId("input-component")).toBeInTheDocument();
    expect(container.querySelector("label")?.querySelector("button")).toHaveAttribute("id", "clear-button-input");
  })

  it('should not have a tag h1 even not sending the label attribute', () => {
    const { container } = render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
        }}
      />
    )

    expect(screen.getByTestId("input-label")).toBeInTheDocument();
    expect(container.querySelector("label")?.querySelector("h1")).not.toBeInTheDocument();
  })

  it('should be rendered without clearButton', () => {
    const { container } = render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
          label: "Test:",
          hasClearButton: false,
        }}
      />
    )

    expect(screen.getByTestId("input-label")).toBeInTheDocument();
    expect(screen.getByTestId("input-area")).toBeInTheDocument();
    expect(screen.getByTestId("input-component")).toBeInTheDocument();
    expect(container.querySelector("label")?.querySelector("button")).toBeFalsy();
  })

  it('should be rendered with searchButton', () => {
    const { container } = render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
          label: "Test:",
          hasClearButton: false,
          hasSearchButton: true,
        }}
      />
    )

    expect(screen.getByTestId("input-label")).toBeInTheDocument();
    expect(screen.getByTestId("input-area")).toBeInTheDocument();
    expect(screen.getByTestId("input-component")).toBeInTheDocument();
    expect(container.querySelector("label")?.querySelector("button")).toHaveAttribute("id", "search-button-input");
  })

  it('should be rendered with sending attribute type', () => {
    const { container } = render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
          type: "text",
          label: "Test:",
        }}
      />
    )

    expect(screen.getByTestId("input-label")).toBeInTheDocument();
    expect(screen.getByTestId("input-area")).toBeInTheDocument();
    expect(screen.getByTestId("input-component")).toBeInTheDocument();
    expect(container.querySelector("label")?.querySelector("button")).toHaveAttribute("id", "clear-button-input");
  })

  it('should change the value of value attribute when the input is changed', () => {
    const spy = jest.fn();

    render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: spy,
          value: "Test",
          placeholder: "Test...",
          required: true,
          type: "text",
          label: "Test:",
        }}
      />
    )

    const input = screen.getByTestId("input-component");

    fireEvent.change(input, { target: { value: "Hello World!" } });
    expect(spy).toHaveBeenCalled();
  })

  it('should clear the input', () => {
    render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
          type: "text",
          label: "Test:",
        }}
      />
    )

    const clearButton = screen.getByRole("button");

    fireEvent.click(clearButton);
    expect(screen.getByTestId("input-component")).toHaveValue("Test");
  })

  it('should clear the input with onClear attributes', () => {
    render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          onClear: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
          type: "text",
          label: "Test:",
        }}
      />
    )

    const clearButton = screen.getByRole("button");

    fireEvent.click(clearButton);
    expect(screen.getByTestId("input-component")).toHaveValue("Test");
  })

  it('should be rendered with all styleProps', () => {
    const { container } = render(
      <Input
        name={`input-test`}
        attributes={{
          setInputValue: jest.fn(),
          onChange: jest.fn(),
          value: "Test",
          placeholder: "Test...",
          required: true,
          label: "Test:",
          styleProps: {
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
          },
        }}
      />
    )

    expect(screen.getByTestId("input-label")).toBeInTheDocument();
    expect(screen.getByTestId("input-area")).toBeInTheDocument();
    expect(screen.getByTestId("input-component")).toBeInTheDocument();
    expect(container.querySelector("label")?.querySelector("button")).toHaveAttribute("id", "clear-button-input");
  })
})
