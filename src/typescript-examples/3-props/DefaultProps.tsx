import React, { Component } from 'react';

/* --------------------------------------------------------------------------- */
/* IMO better to use default params instead of defaultProps, eg. */
type UserProps = {
  name: string;
  active?: boolean; // optional prop - we should assign default value
};

export const User = ({ name, active = true }: UserProps) => {
  return <p className={`${active ? 'active' : ''}`}>{name}</p>;
};
/* --------------------------------------------------------------------------- */

/* FUNCTION COMPONENTS - default props */
const defaultProps1 = {
  active: true,
};

type UserProps1 = {
  name: string;
  active?: boolean;
} & typeof defaultProps1;

const User1 = ({ name, active }: UserProps1) => {
  return <p className={`${active ? 'active' : ''}`}>{name}</p>;
};

User1.defaultProps = defaultProps1;

/* CLASS COMPONENTS - default props */
type UserProps2 = typeof User2.defaultProps & {
  name: string;
  active: boolean;
};

class User2 extends Component<UserProps2> {
  static defaultProps = { active: true };

  render() {
    const { name, active } = this.props;
    return <p className={`${active ? 'active' : ''}`}>{name}</p>;
  }
}
