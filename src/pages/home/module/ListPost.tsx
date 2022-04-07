import Loading from '@src/components/Loading/Loading';
import PostItem from '@src/components/Post/PostItem';
import WrapperPost from '@src/components/Post/WrapperPost';
import { useAppSelector } from '@src/hooks/usAppSelector';
import React from 'react';
import './ListPost.css';
export default function ListPost() {
	const data = useAppSelector(state => state.post.data);
	const isPostLoading = useAppSelector(state => state.post.isLoading);
	const errorMessage = useAppSelector(state => state.post.error);
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
				<h2>Đã có lỗi xảy ra!</h2>
			</div>
		);
	}
	if (data.length === 0) {
		return (
			<div className="loading-box">
				<h2>Không tìm thấy bài viết nào</h2>
			</div>
		);
	}

	return (
		<WrapperPost>
			{data.map(item => (
				<PostItem key={item.id} data={item} />
			))}
		</WrapperPost>
	);
}
