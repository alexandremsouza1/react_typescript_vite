import React, { useCallback, useState } from 'react';
import { IPostDataResponse } from '@src/types/service/post';
import './PostItem.css';
import { formatDateIsoTOLocal } from '@src/helper/format';
import Button from '../Button/Button';
import { MdDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import AnimationPage from '../AnimationPage';
import { deletePost } from '@src/service/post';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deletePostSuccess, showEditPost } from '@src/redux/post/actions';
import { Link } from 'react-router-dom';

export interface PostItemProps {
	data: IPostDataResponse;
}
export default function PostItem(props: PostItemProps) {
	const { data } = props;
	const [isLoadingBtnDelete, setIsLoadingBtnDelete] = useState(false);
	const dispatch = useDispatch();
	const handleDelete = useCallback(() => {
		setIsLoadingBtnDelete(true);
		deletePost(data.id)
			.then(() => {
				setIsLoadingBtnDelete(false);
				dispatch(deletePostSuccess(data.id));
				toast.success('Xóa bài viết thành công');
			})
			.catch(err => {
				console.error(err.response);
				setIsLoadingBtnDelete(false);
				toast.error('Đã xảy ra lỗi!');
			});
	}, [data.id]);
	const handleEdit = useCallback(() => {
		dispatch(
			showEditPost({ id: data.id, title: data.title, content: data.content, imageUrl: data.image?.url || '' }),
		);
	}, [data.id]);

	return (
		<div className="media card post-item">
			<Link className="w-100" to={'/post/' + data.id}>
				<img loading="lazy" alt={data.title} src={data.image?.url} />
			</Link>

			<div className="card-body">
				<div className="card-text-content">
					<h5 className="card-title ">
						<Link className="post-link" to={'/post/' + data.id}>
							{data.title}
						</Link>
					</h5>
					<p className="card-text">{data.content}</p>
				</div>
				<div className="w-100 d-flex  align-items-center justify-content-between ">
					<time className="font-italic">{formatDateIsoTOLocal(data.created_at)}</time>
					<div className="action">
						<Button onClick={handleDelete} isLoading={isLoadingBtnDelete} type="danger" className="mr-2">
							<MdDeleteForever />
						</Button>
						<Button onClick={handleEdit} type="primary">
							<FiEdit />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
