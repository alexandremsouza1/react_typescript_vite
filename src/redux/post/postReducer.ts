import { IPostDataResponse, IPostPaginationResponse } from '@src/types/service/post';
import { PayloadAction } from '@src/types/redux';
import {
	CLOSE_EDIT_POST,
	DELETE_POST_SUCCESS,
	EDIT_POST,
	EDIT_POST_FAILURE,
	EDIT_POST_SUCCESS,
	GET_POST,
	GET_POSTS,
	GET_POSTS_FAILURE,
	GET_POSTS_SUCCESS,
	GET_POST_FAILURE,
	GET_POST_SUCCESS,
	SET_POST_NOT_FOUND,
	SHOW_EDIT_POST,
} from './constants';
export type dataEditPost = {
	id: number;
	title: string;
	content: string;
	imageUrl: string;
};
interface InitialState {
	data: IPostDataResponse[];
	isLoading: boolean;
	pagination: Omit<IPostPaginationResponse, 'offset'>;
	postDetail: {
		data: IPostDataResponse;
		isLoading: boolean;
		errorMessage: string | null;
		isNotFound: boolean;
	};
	error: string | null;
	creatPost: {
		isCreating: boolean;
		errMessage: string | null;
	};
	editPost: {
		isEditing: boolean;
		isShow: boolean;
		data: dataEditPost;
	};
}
const INIT_STATE: InitialState = {
	data: [],
	pagination: {
		count: 0,
		next: null,
		page: 1,
		prev: null,
		total: 0,
	},
	postDetail: {
		data: {
			id: 0,
			title: '',
			content: '',
			image: {
				url: '',
			},
			created_at: '',
			updated_at: '',
		},
		isLoading: false,
		errorMessage: null,
		isNotFound: false,
	},
	isLoading: false,
	error: null,
	creatPost: {
		isCreating: false,
		errMessage: null,
	},
	editPost: {
		isEditing: false,
		isShow: false,
		data: {
			id: -1,
			title: '',
			content: '',
			imageUrl: '',
		},
	},
};
export default function postReducer(state = INIT_STATE, action: PayloadAction<any>): InitialState {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				error: null,
				pagination: INIT_STATE.pagination,
				isLoading: true,
			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				error: null,
				data: action.payload.data as IPostDataResponse[],
				pagination: action.payload.pagination as IPostPaginationResponse,
				isLoading: false,
			};
		case GET_POSTS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload as string,
			};
		// get post
		case GET_POST:
			return {
				...state,
				postDetail: {
					...state.postDetail,
					isLoading: true,
					errorMessage: null,
				},
			};
		case GET_POST_SUCCESS:
			return {
				...state,
				postDetail: {
					...state.postDetail,
					data: action.payload as IPostDataResponse,
					isLoading: false,
					errorMessage: null,
				},
			};

		case GET_POST_FAILURE:
			return {
				...state,
				postDetail: {
					...state.postDetail,
					isLoading: false,
					errorMessage: action.payload as string,
				},
			};
		case SET_POST_NOT_FOUND:
			return {
				...state,
				postDetail: {
					...state.postDetail,
					isNotFound: action.payload as boolean,
				},
			};
		//
		case SHOW_EDIT_POST:
			return {
				...state,
				editPost: {
					...state.editPost,
					isShow: true,
					data: action.payload as dataEditPost,
				},
			};
		case CLOSE_EDIT_POST:
			return {
				...state,
				editPost: {
					...state.editPost,
					isShow: false,
				},
			};
		case EDIT_POST:
			return {
				...state,
				editPost: {
					...state.editPost,
					isEditing: true,
				},
			};
		case EDIT_POST_SUCCESS:
			return {
				...state,
				data: state.data.map(item => {
					const newPostEdit = action.payload as IPostDataResponse;
					if (item.id === newPostEdit.id) {
						return {
							...item,
							...newPostEdit,
						};
					}
					return item;
				}),
				editPost: {
					...state.editPost,
					isEditing: false,
					isShow: false,
					data: INIT_STATE.editPost.data,
				},
			};
		case EDIT_POST_FAILURE:
			return {
				...state,
				editPost: {
					...state.editPost,
					isEditing: false,
				},
			};

		case DELETE_POST_SUCCESS:
			return {
				...state,
				data: state.data.filter(item => item.id !== (action.payload as number)),
			};

		default:
			return state;
	}
}
