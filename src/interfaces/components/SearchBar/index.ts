import { Dispatch, SetStateAction } from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface ISearchBarAttributes {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  styleProps?: IStyleProps;
}

export interface ISearchBarProps extends IDefaultProps {
  attributes: ISearchBarAttributes;
}
