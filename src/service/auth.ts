import apiClient from '@src/config/apiClient';
import { IUserDataResponse, IUserLoginRequest, IUserRegisterRequest } from '@src/types/service/user';

export const getCurrentUser = () => {
	return apiClient.get<IUserDataResponse>('me');
};
export const loginUser = (params: IUserLoginRequest) => {
	return apiClient.post<IUserDataResponse>('login', params);
};
export const registerUser = (params: IUserRegisterRequest) => {
	return apiClient.post<IUserDataResponse>('register', params);
};
