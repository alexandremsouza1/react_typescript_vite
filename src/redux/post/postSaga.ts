import { getPost, getPosts, GetPostsParams } from '@src/service/post';
import { PayloadAction } from '@src/types/redux';
import { GetPostResponse, IPostDataResponse } from '@src/types/service/post';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { all, call, CallEffect, fork, put, PutEffect, takeLatest } from 'redux-saga/effects';
import { getPostsError, getPostsSuccess, getPostSuccess, setPostNotFound } from './actions';
import { GET_POST, GET_POSTS } from './constants';

function* getPostsSaga(action: PayloadAction<GetPostsParams>): Generator<
	// step types
	CallEffect<AxiosResponse<GetPostResponse>> | PutEffect<AnyAction>,
	// return type
	void,
	// intermediate argument
	AxiosResponse<GetPostResponse>
> {
	const { payload: params } = action;
	try {
		const res = yield call(getPosts, params);
		yield put(getPostsSuccess({ data: res.data.data.items, pagination: res.data.pagination }));
	} catch (error) {
		yield put(getPostsError('Đã có lỗi xảy ra!'));
	}
}

function* getPostSaga(action: PayloadAction<number>): Generator<
	// step types
	CallEffect<AxiosResponse<{ data: IPostDataResponse }>> | PutEffect<AnyAction>,
	// return type
	void,
	// intermediate argument
	AxiosResponse<{ data: IPostDataResponse }>
> {
	const { payload: postId } = action;
	try {
		const res = yield call(getPost, postId);
		yield put(getPostSuccess(res.data.data));
	} catch (error: any) {
		if (error?.response?.status === 404) {
			yield put(setPostNotFound(true));
		} else {
			yield put(getPostsError('Đã có lỗi xảy ra!'));
		}
	}
}
export function* watchGetPosts() {
	yield takeLatest(GET_POSTS, getPostsSaga);
}
export function* watchGetPost() {
	yield takeLatest(GET_POST, getPostSaga);
}

export default function* postSaga() {
	yield all([fork(watchGetPosts), fork(watchGetPost)]);
}
