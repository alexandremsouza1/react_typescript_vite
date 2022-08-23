import axios from 'axios';
import { getAccessToken, setAccessToken } from '../helper/token';
import { configApp } from './config';

const apiClient = axios.create({
	baseURL: `${configApp.DOMAIN_API}/${configApp.URL_API_PREFIX}/`,
	headers: {
		'content-type': 'application/json',
	},
});
apiClient.interceptors.request.use((config: any) => {
	const accessToken = getAccessToken();
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});
apiClient.interceptors.response.use(
	res => res,

	async err => {
		const originalConfig = err?.config;
		if (err?.response?.status === 401 && err?.response?.message === 'Token is expired' && !originalConfig?._retry) {
			originalConfig._retry = true;
			try {
				const response = await apiClient.get('refreshToken');
				const accessToken = response.data.access_token;
				setAccessToken(accessToken);
				return apiClient(originalConfig);
			} catch (_error) {
				return Promise.reject(_error);
			}
		}

		return Promise.reject(err);
	},
);
export default apiClient;
