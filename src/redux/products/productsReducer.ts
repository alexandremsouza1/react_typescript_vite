import { IProductDataResponse } from '@src/types/service/product';
import { PayloadAction } from '@src/types/redux';
import {
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE
} from './constants';


interface InitialState {
	data: IProductDataResponse[];
	isLoading: boolean;
	error: string | null;
}


const INIT_STATE: InitialState = {
	data: [],
	isLoading: false,
	error: null
};
export default function productReducer(state = INIT_STATE, action: PayloadAction<any>): InitialState {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				error: null,
				isLoading: true,
			};
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				error: null,
				data: action.payload.data as IProductDataResponse[],
				isLoading: false,
			};
		case GET_PRODUCTS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload as string,
			};
		default:
			return state;
	}
}
