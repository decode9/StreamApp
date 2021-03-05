import { ReactNode } from 'react';

export interface ChildrenElement {
  children: ReactNode
}

export interface List {
  icon: JSX.Element
  message: JSX.Element | string,
  alignItems?: string
};

export interface DispatchProps {
  type: string,
  payload: any
}
