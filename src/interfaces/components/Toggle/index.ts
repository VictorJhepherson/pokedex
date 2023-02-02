import { Dispatch, SetStateAction } from "react";
import { IDefaultProps, IStyleProps } from "../global";

interface IToggleAttributes {
  toggleOn: boolean;
  setToggleOn: Dispatch<SetStateAction<boolean>>;
  textOn?: string;
  textOff?: string;
  styleProps?: IStyleProps;
}

export interface IToggleProps extends IDefaultProps {
  attributes: IToggleAttributes;
}
