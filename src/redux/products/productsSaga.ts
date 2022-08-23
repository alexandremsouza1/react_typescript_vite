import { getProducts } from '@src/service/product';
import { PayloadAction } from '@src/types/redux';
import { GetProductResponse, IProductDataResponse } from '@src/types/service/product';
import { AxiosResponse } from 'axios';
import { debug } from 'console';
import { AnyAction } from 'redux';
import { all, call, CallEffect, fork, put, PutEffect, takeLatest } from 'redux-saga/effects';
import { getProductSuccess,getProductError } from './actions';
import { GET_PRODUCTS } from './constants';

function* getProductsSaga(): Generator<
	// step types
	CallEffect<AxiosResponse<GetProductResponse>> | PutEffect<AnyAction>,
	// return type
	void,
	// intermediate argument
	AxiosResponse<GetProductResponse>
> {
	try {
		const res = yield call(getProducts);
		yield put(getProductSuccess({ data: res.data }));
	} catch (error) {
		yield put(getProductError('Erro ao buscar os produtos!'));
	}
}


export function* watchGetProducts() {
	yield takeLatest(GET_PRODUCTS, getProductsSaga);
}
export default function* productsSaga() {
	yield all([fork(watchGetProducts)]);
}
