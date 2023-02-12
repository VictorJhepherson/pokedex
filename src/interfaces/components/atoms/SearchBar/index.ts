import React, { Dispatch, SetStateAction } from "react";
import { IDefaultProps, IStyleProps } from "../../global";

interface ISearchBarAttributes {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  styleProps?: IStyleProps;
}

export interface ISearchBarProps extends IDefaultProps {
  attributes: ISearchBarAttributes;
}
