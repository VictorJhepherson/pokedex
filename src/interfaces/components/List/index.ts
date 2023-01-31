import { IDefaultProps, IStyleProps } from "../global";

interface IListAttributes {
  isLoading?: boolean;
  styleProps?: IStyleProps;
}

export interface IListProps extends IDefaultProps {
  attributes: IListAttributes;
}
