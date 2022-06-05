import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://zora.cool:3002";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
	console.log("aspect: request");

	return config;
});

axios.interceptors.response.use(
	(res: AxiosResponse) => {
		if (res.status !== 200) {
			return Promise.reject(res);
		}

		return res.data.data;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export const myAxios = axios;
