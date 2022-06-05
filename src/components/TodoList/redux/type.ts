import { ACTION_TYPE } from "./actionTypes";

export interface ITodo {
	id: number;
	content: string;
	isFinish: boolean;
}

export interface IState {
	todoList: ITodo[];
}

export interface IAction {
	type: ACTION_TYPE;
	payload: TPayload;
}

export type TPayload = ITodo | ITodo[] | number;
