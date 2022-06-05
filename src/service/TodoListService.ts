import { ITodo } from "../components/TodoList/redux/type";
import { myAxios } from "../lib/http";

export async function getList<T>(): Promise<T> {
	const res = await myAxios.post<T, T>("select/list", {
		userId: 1,
	});
	return res;
}

export async function deleteList<T>(itemIds: number[]): Promise<T> {
	const res = await myAxios.post<T, T>("delete/list", {
		userId: 1,
		itemIds,
	});

	return res;
}

export async function updateList<T>(todo: ITodo): Promise<T> {
	console.log("updateList: ");
	debugger;
	const res = await myAxios.post<T, T>("update/list", {
		userId: 1,
		...todo,
	});

	return res;
}
export async function addList<T>(todo: ITodo): Promise<T> {
	console.log("request addlist");

	const res = await myAxios.post<T, T>("add/list", {
		userId: 1,
		...todo,
	});
	return res;
}
