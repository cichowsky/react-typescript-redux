export enum ActionType {
  ADD = 'add',
  SUBTRACT = 'subtract',
  RESET = 'reset',
}

interface IAddAction {
  type: ActionType.ADD;
  payload: number;
}

interface ISubtractAction {
  type: ActionType.SUBTRACT;
  payload: number;
}

interface IResetAction {
  type: ActionType.RESET;
}

export type Action = IAddAction | ISubtractAction | IResetAction;
