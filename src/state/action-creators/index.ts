import { Dispatch } from 'react';
import { ActionType, Action } from 'state/action-types';

export const add = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD,
      payload: value,
    });
  };
};

export const subtract = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUBTRACT,
      payload: value,
    });
  };
};

export const reset = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET,
    });
  };
};
