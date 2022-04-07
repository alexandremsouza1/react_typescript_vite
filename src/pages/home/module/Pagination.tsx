import PaginationComponent from '@src/components/Paginaiton/PaginationComponent';
import { useAppSelector } from '@src/hooks/usAppSelector';
import React from 'react';

export default function Pagination() {
	const currentPage = useAppSelector(state => state.post.pagination.page);
	const totalPage = useAppSelector(state => state.post.pagination.total);
	if (totalPage <= 1) return null;
	return (
		<div className="d-flex justify-content-center mt-4">
			<PaginationComponent currentPage={currentPage} totalPage={totalPage} />
		</div>
	);
}
