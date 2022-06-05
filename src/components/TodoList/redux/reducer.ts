import { useReducer } from "react";
import { getAction } from "./action";
import { ACTION_TYPE } from "./actionTypes";
import { IAction, IState, ITodo } from "./type";

function todoReducer(state: IState, action: IAction): IState {
	const { addTodo, removeTodo, toggleTodo, initalTodo } = getAction(state);
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPE.INIT_TODO_TODOLIST:
			return initalTodo(payload as ITodo[]);

		case ACTION_TYPE.ADD_TODO:
			return addTodo(payload as ITodo);

		case ACTION_TYPE.REMOVE_TODO:
			return removeTodo(payload as number);

		case ACTION_TYPE.TOGGLE_TODO:
			console.log("todoreducer toggle");

			return toggleTodo(payload as number);

		default:
			return state;
	}
}

export default function useTodoReducer(initalState: IState) {
	const [state, dispatch] = useReducer(todoReducer, initalState);
	return {
		state,
		dispatch,
	};
}
