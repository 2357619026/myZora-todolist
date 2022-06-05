import React, { FC, ReactElement, useContext } from "react";
import { context } from "..";
import { ACTION_TYPE } from "../redux/actionTypes";
import { ITodo } from "../redux/type";

interface IProps {
	todo: ITodo;
}

const TdItem: FC<IProps> = ({ todo }): ReactElement => {
	const { id, content, isFinish } = todo;
	const { dispatch } = useContext(context);

	const toggleTodo = (id: number) => {
		dispatch({
			type: ACTION_TYPE.TOGGLE_TODO,
			payload: id,
		});
		console.log("toggle");
	};

	const removeTodo = (id: number) => {
		dispatch({
			type: ACTION_TYPE.REMOVE_TODO,
			payload: id,
		});
	};

	return (
		<div className="todo-item">
			<input type="checkbox" checked={isFinish} onChange={() => toggleTodo(id)} />
			<span style={{ textDecoration: isFinish ? "line-through" : "none" }}>{content}</span>
			<button onClick={() => removeTodo(id)}>删除</button>
		</div>
	);
};

export default TdItem;
