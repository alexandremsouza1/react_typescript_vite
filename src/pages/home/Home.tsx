import useQueryUrl from '@src/hooks/useQueryUrl';
import { getPostsAction } from '@src/redux/post/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ActionComponent from './module/Action/ActionComponent';
import ListPost from './module/ListPost';
import Pagination from './module/Pagination';

export default function Home() {
	const [params] = useQueryUrl();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPostsAction(params));
	}, [params]);

	return (
		<>
			<ActionComponent />
			<ListPost />
			<Pagination />
		</>
	);
}
