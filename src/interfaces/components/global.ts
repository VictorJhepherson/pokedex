import { ChildrenType } from "../types";

export interface IStyleProps {
  [key: string]: any;
}

export interface IDefaultProps {
  name?: string;
  children?: ChildrenType;
}
