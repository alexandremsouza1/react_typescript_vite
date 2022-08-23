import apiClient from '@src/config/apiClient';
import { GetProductResponse } from '@src/types/service/product';

export const getProducts = () => {
	return apiClient.get<GetProductResponse>('catalog');
};
