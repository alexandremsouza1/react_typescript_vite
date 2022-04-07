import { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce';

export function useDebounce(handle: any, timer: number, dependencies: any[]) {
	// ....
	const debouncedChangeHandler = useMemo(() => debounce(handle, timer), dependencies);

	useEffect(() => {
		return () => {
			debouncedChangeHandler.cancel();
		};
	}, []);
	return debouncedChangeHandler;
}
