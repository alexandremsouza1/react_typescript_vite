export interface IUserDataResponse {
	email: string;
	name: string;
	avatar: {
		url: string;
	};
	created_at: string;
	updated_at: string;
}

export interface IUserLoginRequest {
	email: string;
	password: string;
}
export interface IUserRegisterRequest {
	user: {
		name: string;
		email: string;
		password: string;
	};
}
