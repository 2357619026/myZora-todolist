import React, { FC, ReactElement } from "react";
import { ITodo } from "../redux/type";
import TdItem from "./item";

interface IProps {
	todoList: ITodo[];
}

const TdList: FC<IProps> = ({ todoList }): ReactElement => {
	return (
		<div className="td-list">
			{todoList &&
				todoList.map((todo: ITodo) => {
					return <TdItem key={todo.id} todo={todo} />;
				})}
		</div>
	);
};

export default TdList;
