import { EditPostRequest, IPostDataResponse, IPostPaginationResponse } from '@src/types/service/post';
import { GetPostsParams, deletePost } from '@src/service/post';
import { PayloadAction } from '@src/types/redux';
import {
	CLOSE_EDIT_POST,
	DELETE_POST_SUCCESS,
	EDIT_POST,
	EDIT_POST_SUCCESS,
	GET_POST,
	GET_POSTS,
	GET_POSTS_FAILURE,
	GET_POSTS_SUCCESS,
	GET_POST_SUCCESS,
	SET_POST_NOT_FOUND,
	SHOW_EDIT_POST,
} from './constants';
import { dataEditPost } from './postReducer';

export const getPostsAction = (params: GetPostsParams): PayloadAction<GetPostsParams, typeof GET_POSTS> => ({
	type: GET_POSTS,
	payload: params,
});

type GetPostsSuccessPayload = {
	data: IPostDataResponse[];
	pagination: IPostPaginationResponse;
};
export const getPostsSuccess = ({
	data,
	pagination,
}: GetPostsSuccessPayload): PayloadAction<GetPostsSuccessPayload, typeof GET_POSTS_SUCCESS> => ({
	type: GET_POSTS_SUCCESS,
	payload: {
		data,
		pagination,
	},
});

export const getPostsError = (message: string): PayloadAction<string, typeof GET_POSTS_FAILURE> => ({
	type: GET_POSTS_FAILURE,
	payload: message,
});
export const closeEditPostAction = (): PayloadAction<null, typeof CLOSE_EDIT_POST> => ({
	type: CLOSE_EDIT_POST,
	payload: null,
});
export const showEditPost = (data: dataEditPost): PayloadAction<dataEditPost, typeof SHOW_EDIT_POST> => ({
	type: SHOW_EDIT_POST,
	payload: data,
});
export const editPostAction = (data: EditPostRequest): PayloadAction<EditPostRequest, typeof EDIT_POST> => ({
	type: EDIT_POST,
	payload: data,
});
export const editPostSuccess = (
	newPostEdit: IPostDataResponse,
): PayloadAction<IPostDataResponse, typeof EDIT_POST_SUCCESS> => ({
	type: EDIT_POST_SUCCESS,
	payload: newPostEdit,
});

export const deletePostSuccess = (postId: number): PayloadAction<number, typeof DELETE_POST_SUCCESS> => ({
	type: DELETE_POST_SUCCESS,
	payload: postId,
});

export const getPostAction = (postId: number): PayloadAction<number, typeof GET_POST> => ({
	type: GET_POST,
	payload: postId,
});
export const getPostSuccess = (
	postDetail: IPostDataResponse,
): PayloadAction<IPostDataResponse, typeof GET_POST_SUCCESS> => ({
	type: GET_POST_SUCCESS,
	payload: postDetail,
});

export const setPostNotFound = (isNotFound: boolean): PayloadAction<boolean, typeof SET_POST_NOT_FOUND> => ({
	type: SET_POST_NOT_FOUND,
	payload: isNotFound,
});
