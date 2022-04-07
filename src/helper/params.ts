import moment from 'moment';
import { merge } from 'lodash';
import queryString from 'query-string';
export const filterParams = (filter = {} as any) => {
	for (const key in filter) {
		if (moment.isMoment(filter[key])) {
			filter[key] = filter[key].format('X');
		}
		if (filter[key] === null || filter[key] == undefined || filter[key] === '') delete filter[key];
	}

	return merge({}, filter);
};
export const paramsToQueryUrl = (params = {} as any) => queryString.stringify(filterParams(params));
