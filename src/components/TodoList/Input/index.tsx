import React, { FC, ReactElement, useRef } from "react";
import { ACTION_TYPE } from "../redux/actionTypes";
import { IAction, ITodo } from "../redux/type";

interface IProps {
	dispatch: (key: IAction) => any;
	todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ dispatch, todoList }): ReactElement => {
	const inputRef = useRef<HTMLInputElement>(null);

	const addItem = (): void => {
		const val: string = inputRef.current!.value.trim();

		if (val.length) {
			const isExist = todoList.find((todo) => todo.content === val);

			if (isExist) {
				alert("已存在该项");
				return;
			}

			dispatch({
				type: ACTION_TYPE.ADD_TODO,
				payload: {
					id: new Date().getTime(),
					content: val,
					isFinish: false,
				},
			});

			inputRef.current!.value = "";
		}
	};

	return (
		<div className="todo-input">
			<form
				onSubmit={(e) => {
					addItem();
					e.preventDefault();
				}}>
				<input type="text" placeholder="请输入待办事项" ref={inputRef}></input>
				<button onSubmit={addItem}>增加</button>
			</form>
		</div>
	);
};

export default TdInput;
