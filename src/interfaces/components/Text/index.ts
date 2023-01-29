import { IDefaultProps, IStyleProps } from "../global";

interface ITextAttributes {
  text: string;
  styleProps?: IStyleProps;
}

export interface ITextProps extends IDefaultProps {
  attributes: ITextAttributes;
}
