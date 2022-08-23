import { IProductDataResponse,GetProductResponse } from '@src/types/service/product';
import { PayloadAction } from '@src/types/redux';
import {
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE
} from './constants';


export const getProductsAction = (): PayloadAction<null, typeof GET_PRODUCTS> => ({
	type: GET_PRODUCTS,
	payload: null,
});



export type GetProductSuccessPayload = {
	data: {
		config: any;
		data: IProductDataResponse[];
		headers: any;
		request: XMLHttpRequest;
		status: number;
		statusText: string;
	}
};
export const getProductSuccess = ({
	data,
}: GetProductSuccessPayload): PayloadAction<GetProductSuccessPayload, typeof GET_PRODUCTS_SUCCESS> => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: {
		data
	},
});

export const getProductError = (message: string): PayloadAction<string, typeof GET_PRODUCTS_FAILURE> => ({
	type: GET_PRODUCTS_FAILURE,
	payload: message,
});

