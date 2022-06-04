import { useReducer } from "react";
import { ACTION_TYPE, IAction, IState, ITodo } from "../typings";
import { addTodo, initalTodo, removeTodo, toggleTodo } from "./action";

function todoReducer(state: IState, action: IAction): IState {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPE.INIT_TODO_TODOLIST:
			return initalTodo(state, payload as ITodo[]);
		case ACTION_TYPE.ADD_TODO:
			return addTodo(state, payload as ITodo);
		case ACTION_TYPE.REMOVE_TODO:
			return removeTodo(state, payload as number);
		case ACTION_TYPE.TOGGLE_TODO:
			return toggleTodo(state, payload as number);
		default:
			return state;
	}
}

export { todoReducer };
