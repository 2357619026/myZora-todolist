import React, { FC, ReactElement, useRef } from "react";
import { ITodo } from "../typings";

interface IProps {
	addTodo: (todo: ITodo) => void;
	todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
	const inputRef = useRef<HTMLInputElement>(null);

	const addItem = (): void => {
		const val: string = inputRef.current!.value.trim();

		if (val.length) {
			const isExist = todoList.find((todo) => todo.content === val);

			if (isExist) {
				alert("已存在该项");
				return;
			}

			addTodo({
				id: new Date().getTime(),
				content: val,
				completed: false,
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
