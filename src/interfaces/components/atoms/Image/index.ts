import { IDefaultProps, IStyleProps } from "../../global";

interface IImageStyleProps extends IStyleProps {
  hasHover: boolean;
}

interface IImageAttributes {
  src: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  styleProps?: IImageStyleProps;
}

export interface IImageProps extends IDefaultProps {
  attributes: IImageAttributes;
}
