import { LoadingPage } from '@src/components/Loading/Loading';
import { formatDateIsoTOLocal } from '@src/helper/format';
import { useAppSelector } from '@src/hooks/usAppSelector';
import { getPostAction, setPostNotFound } from '@src/redux/post/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './PostDetail.css';
export default function PostDetail() {
	const params = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const dataPostDetail = useAppSelector(state => state.post.postDetail);
	useEffect(() => {
		if (params.id && !isNaN(params.id as any)) dispatch(getPostAction(parseInt(params.id)));
		if (dataPostDetail.data.title !== '') document.title = dataPostDetail.data.title;
	}, [params.id]);

	useEffect(() => {
		if (dataPostDetail.isNotFound) {
			dispatch(setPostNotFound(false));
			navigate('/404');
		}
	}, [dataPostDetail.isNotFound]);
	if (dataPostDetail.isLoading) {
		return <LoadingPage />;
	}
	if (dataPostDetail.errorMessage) {
		return <h2>{dataPostDetail.errorMessage}</h2>;
	}

	return (
		<div className="post-detail-container">
			<img className="img-detail" src={dataPostDetail.data.image?.url || ''} alt={dataPostDetail.data.title} />
			<h1>{dataPostDetail.data.title}</h1>
			<div className="d-flex">
				<span className="mr-3">Cập nhật lần cuối:</span>
				<time>{formatDateIsoTOLocal(dataPostDetail.data.updated_at)}</time>
			</div>
			<div className="mt-5">
				<p>{dataPostDetail.data.content}</p>
			</div>
		</div>
	);
}
