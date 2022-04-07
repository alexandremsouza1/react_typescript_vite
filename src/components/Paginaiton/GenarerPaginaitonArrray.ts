export const DOT = '...';
type RangeType = number | typeof DOT;
export function generatePageRange(currentPage: number, totalPage: number, delta = 2): RangeType[] {
	// creates array with base 1 index
	const range = Array.from(new Array(totalPage)).map((_, index) => index + 1);

	return range.reduce((pages: RangeType[], page: number) => {
		// allow adding of first and last pages
		if (page === 1 || page === totalPage) {
			return [...pages, page];
		}

		// if within delta range add page
		if (page - delta <= currentPage && page + delta >= currentPage) {
			return [...pages, page];
		}

		// otherwise add 'gap if gap was not the last item added.
		if (pages[pages.length - 1] !== DOT) {
			return [...pages, DOT as RangeType];
		}

		return pages;
	}, []);
}
