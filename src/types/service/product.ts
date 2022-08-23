export type ProductSortBy = '_id';
export const arrProductSortBy: ProductSortBy[] = ['_id'];
export type ProductSortDirection = 'asc' | 'desc';
export const arrProductSortDirection: ProductSortDirection[] = ['asc', 'desc'];

export interface IProductDataResponse {
	_id: string,
	info: {
		name: string,
		dimensions: string,
		weight: string,
		displayType: string,
		displaySize: string,
		displayResolution: string,
		os: string,
		cpu: string,
		internalMemory: string,
		ram: string,
		camera: string,
		batery: string,
		color: string,
		price: number,
		photo: string
	},
	tags: {
		priceRange: string,
		brand: string,
		color: string,
		os: string,
		internalMemory: string,
		ram: string,
		displaySize: string,
		displayResolution: string,
		camera: string,
		cpu: string
	}
}
export interface IProductPaginationResponse {
	count: number;
	page: number;
	offset: number;
	total: number;
	prev: number | null;
	next: number | null;
}
export interface GetProductResponse {
	config: any;
	data: IProductDataResponse[];
	headers: any;
	request: XMLHttpRequest;
	status: number;
	statusText: string;
}
