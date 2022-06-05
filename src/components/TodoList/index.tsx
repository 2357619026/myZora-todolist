import React, { createContext, FC, ReactElement, useEffect } from "react";
import { getList } from "../../service/TodoListService";
import TdInput from "./Input";
import TdList from "./List";
import { ACTION_TYPE } from "./redux/actionTypes";
import useTodoReducer from "./redux/reducer";
import { IAction, IState, ITodo } from "./redux/type";

function init(initTodoList: ITodo[]): IState {
	return {
		todoList: initTodoList,
	};
}

type TContext = {
	dispatch: (key: IAction) => any;
};

export const context = createContext({} as TContext);

const TodoList: FC = (): ReactElement => {
	const {
		state: { todoList },
		dispatch,
	} = useTodoReducer({ todoList: [] } as IState);

	useEffect(() => {
		(async function () {
			const res = await getList<ITodo[]>();
			dispatch({
				type: ACTION_TYPE.INIT_TODO_TODOLIST,
				payload: res,
			});
		})();
	}, []);

	return (
		<div className="todo-list">
			<TdInput dispatch={dispatch} todoList={todoList} />
			<context.Provider value={{ dispatch }}>
				<TdList todoList={todoList} />
			</context.Provider>
		</div>
	);
};

export default TodoList;
