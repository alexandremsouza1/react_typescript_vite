import useQueryUrl from '@src/hooks/useQueryUrl';
import { getProductsAction } from '@src/redux/products/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ActionComponent from './module/Action/ActionComponent';
import ListPost from './module/ListPost';
import Pagination from './module/Pagination';

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProductsAction());
	});

	return (
		<>
			<ActionComponent />
			<ListPost />
			<Pagination />
		</>
	);
}
