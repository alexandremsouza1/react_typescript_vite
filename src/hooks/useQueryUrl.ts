import { filterParams } from '@src/helper/params';
import { useSearchParams } from 'react-router-dom';

export default function useQueryUrl() {
	const [queryUrl, setQueryUrl] = useSearchParams();
	const search = queryUrl.get('search');
	const page = queryUrl.get('page');
	const offset = queryUrl.get('offset') || 9;
	const sort_by = queryUrl.get('sort_by');
	const sort_direction = queryUrl.get('sort_direction');
	const paramsUrl = { search, page, offset, sort_by, sort_direction };
	const changeQueryUrl = (newParams: typeof paramsUrl) => {
		const newParamsFiltered = filterParams({
			...paramsUrl,
			...(newParams as any),
		});
		setQueryUrl(newParamsFiltered);
	};
	return [paramsUrl as any, changeQueryUrl];
}
