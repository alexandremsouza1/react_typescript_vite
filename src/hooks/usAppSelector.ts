import { RootState } from '@src/redux/store';
import { shallowEqual, useSelector } from 'react-redux';

export function useAppSelector<T>(selector: (state: RootState) => T) {
	return useSelector(selector, shallowEqual);
}
