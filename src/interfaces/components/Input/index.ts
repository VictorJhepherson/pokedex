import React, { Dispatch, SetStateAction } from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface IInputAttributes {
  setInputValue: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder?: string;
  maxLenght?: number;
  minLenght?: number;
  required?: boolean;
  type?: string;
  label?: string;
  disabled?: string;
  autoComplete?: string;
  hasClearButton?: boolean;
  hasSearchButton?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onClear?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  styleProps?: IStyleProps;
}

export interface IInputProps extends IDefaultProps {
  attributes: IInputAttributes;
}
