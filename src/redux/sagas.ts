import { all } from 'redux-saga/effects';
import postSaga from './post/postSaga';
import productsSaga from './products/productsSaga';

export default function* rootSaga() {
	yield all([
		postSaga(),
		productsSaga()
	]);
}
