import { configApp } from '../config/config';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const getAccessToken = () => cookies.get(configApp.TOKEN_KEY.toString());
export const setAccessToken = (accessToken: string) => {
	cookies.set(configApp.TOKEN_KEY.toString(), accessToken);
};
export const deleteAccessToken = () => {
	cookies.remove(configApp.TOKEN_KEY.toString());
};
