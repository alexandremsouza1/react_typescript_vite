import Loading from '@src/components/Loading/Loading';
import PostItem from '@src/components/Post/PostItem';
import WrapperPost from '@src/components/Post/WrapperPost';
import { useAppSelector } from '@src/hooks/usAppSelector';
import React from 'react';
import './ListPost.css';
export default function ListPost() {
	const data = useAppSelector(state => state.products.data);
	const isPostLoading = useAppSelector(state => state.products.isLoading);
	const errorMessage = useAppSelector(state => state.products.error);
	if (isPostLoading) {
		return (
			<div className="loading-box">
				<Loading type="success" />
			</div>
		);
	}
	if (errorMessage) {
		return (
			<div className="loading-box">
				<h2>Erro!</h2>
			</div>
		);
	}
	if (data.length === 0) {
		return (
			<div className="loading-box">
				<h2>Nada a exibir</h2>
			</div>
		);
	}

	return (
		<WrapperPost>
			<ul>
			{data.map((item,key) => (
				<li key={key}>{item.info.name}</li> 
			))}
			</ul>
		</WrapperPost>
	);
}
