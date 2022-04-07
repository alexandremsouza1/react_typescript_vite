export type PostSortBy = 'id' | 'title' | 'content' | 'created_at' | 'updated_at';
export const arrPostSortBy: PostSortBy[] = ['id', 'title', 'content', 'created_at', 'updated_at'];
export type PostSortDirection = 'asc' | 'desc';
export const arrPostSortDirection: PostSortDirection[] = ['asc', 'desc'];

export interface IPostDataResponse {
	id: number;
	title: string;
	content: string;
	image?: {
		url: string;
	};
	created_at: string;
	updated_at: string;
}
export interface IPostPaginationResponse {
	count: number;
	page: number;
	offset: number;
	total: number;
	prev: number | null;
	next: number | null;
}
export interface GetPostResponse {
	data: {
		items: IPostDataResponse[];
	};
	pagination: IPostPaginationResponse;
}
export interface EditPostRequest {
	id: number;
	data: FormData;
}
