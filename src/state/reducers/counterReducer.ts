import { ActionType, Action } from 'state/action-types';

const initialState = 0;

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD:
      return state + action.payload;
    case ActionType.SUBTRACT:
      return state - action.payload;
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
