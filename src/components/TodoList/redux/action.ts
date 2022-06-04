// 一个又一个的动作
// 接收state，和payload。通过payload对state进行操作

import { IState, ITodo } from "../typings";

export const addTodo = (state: IState, payload: ITodo) => {
	return {
		...state,
		todoList: [...state.todoList, payload],
	};
};

export const removeTodo = (state: IState, payload: number) => {
	const todoList = state.todoList.filter((item) => {
		return item.id !== payload;
	});

	return {
		...state,
		todoList,
	};
};

export const toggleTodo = (state: IState, payload: number) => {
	const todoList = state.todoList.map((item) => {
		if (item.id === payload) {
			item.completed = !item.completed;
		}
		return item;
	});
	return {
		...state,
		todoList,
	};
};

export const initalTodo = (state: IState, payload: ITodo[]) => {
	return {
		...state,
		todoList: payload,
	};
};
