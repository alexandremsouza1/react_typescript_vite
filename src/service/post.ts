import apiClient from '@src/config/apiClient';
import { EditPostRequest, GetPostResponse, IPostDataResponse } from '@src/types/service/post';
export type GetPostsParams = {
	search: string | null;
	page: string | null;
	offset: string | null;
	sortBy: string | null;
	sortDirection: string | null;
};
export const getPosts = (params: GetPostsParams) => {
	return apiClient.get<GetPostResponse>('blogs', { params });
};
export const getPost = (postId: number) => {
	return apiClient.get<{ data: IPostDataResponse }>(`blogs/${postId}`);
};
export const createPost = (data: FormData) => {
	return apiClient.post<{ data: IPostDataResponse }>('blogs', data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};
export const editPost = (data: EditPostRequest) => {
	return apiClient.put<{ data: IPostDataResponse }>(`blogs/${data.id}`, data.data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};
export const deletePost = (idPost: number) => {
	return apiClient.delete(`blogs/${idPost}`);
};
