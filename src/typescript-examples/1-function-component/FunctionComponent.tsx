import React, { FC } from 'react';

interface IMessageProps {
  text: string;
} // or type

/* WAY 1 (imo better) */
export const Message = ({ text }: IMessageProps) => {
  return <div>{text}</div>; // type inference (JSX.Element)
};

/* WAY 2 */
// !! Remember to type children prop, because we can use children even though we haven't defined it in MessageProps !!
export const Message2: FC<IMessageProps> = ({ text }) => {
  return <div>{text}</div>;
};
