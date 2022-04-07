import Button from '@src/components/Button/Button';
import { useAppSelector } from '@src/hooks/usAppSelector';
import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import ModalCreate from './ModalCreate';
import ModalEdit from './ModalEdit';
import SortBy from './SortBy';
import SortDirection from './SortDirection';

export default function ActionComponent() {
	const [showModalCreate, setShowModalCreate] = useState(false);
	const isShowModalEdit = useAppSelector(state => state.post.editPost.isShow);

	const onToggleShowModalCreate = () => {
		setShowModalCreate(!showModalCreate);
	};
	return (
		<div className="my-5 d-flex align-items-center ">
			<Button onClick={onToggleShowModalCreate}>
				<IoAdd /> Create new post
			</Button>
			{/* sort */}
			<SortBy />
			<SortDirection />
			{/* modal */}
			{showModalCreate && <ModalCreate setOpen={setShowModalCreate} />}
			{isShowModalEdit && <ModalEdit />}
		</div>
	);
}
