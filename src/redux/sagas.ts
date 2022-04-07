import { all } from 'redux-saga/effects';
import postSaga from './post/postSaga';

export default function* rootSaga() {
	yield all([postSaga()]);
}
