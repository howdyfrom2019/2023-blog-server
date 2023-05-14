export interface IPostItem {
  id: string;
  title: string;
  description: string;
  type: IPostState
}

export enum IPostState {
  PUBLIC,
  PRIVATE,
}