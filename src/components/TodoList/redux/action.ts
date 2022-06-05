// 一个又一个的动作
// 接收state，和payload。通过payload对state进行操作
import axios from "axios";
import { addList, deleteList, updateList } from "../../../service/TodoListService";
import { IState, ITodo } from "./type";

export const getAction = (state: IState) => {
	const addTodo = (payload: ITodo) => {
		console.log("addTodo action");

		addList(payload);
		return {
			...state,
			todoList: [...state.todoList, payload],
		};
	};

	const removeTodo = (payload: number) => {
		//delete from server
		deleteList([payload]);

		const todoList = state.todoList.filter((item) => {
			return item.id !== payload;
		});

		return {
			...state,
			todoList,
		};
	};

	const toggleTodo = (payload: number) => {
		const todoList = state.todoList.map((item) => {
			let isFinished = item.isFinish;
			if (item.id === payload) {
				isFinished = !isFinished;
				console.log("request toggle");
				// debugger;
				// updateList({
				// 	...item,
				// 	isFinish: isFinished,
				// });
				axios.post("update/list", {
					...item,
					isFinish: isFinished,
				});
			}

			return {
				...item,
				isFinish: isFinished,
			};
		});

		return {
			...state,
			todoList,
		};
	};

	const initalTodo = (payload: ITodo[]) => {
		console.log("initalTodo: ", payload);

		return {
			...state,
			todoList: payload,
		};
	};
	return {
		addTodo,
		removeTodo,
		toggleTodo,
		initalTodo,
	};
};
