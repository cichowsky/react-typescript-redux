/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, ReactChild, ReactText, ReactElement } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <div>{children}</div>;
};
export default Layout;

// ReactNode -> ReactChild | boolean | null | undefined
// ReactChild -> ReactElement | ReactText
// ReactText -> string | number
