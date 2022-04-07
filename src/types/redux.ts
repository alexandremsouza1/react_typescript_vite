/* eslint-disable @typescript-eslint/ban-types */

export type PayloadAction<P = void, T extends string = string> = {
	payload: P;
	type: T;
};
