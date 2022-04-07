import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import Button from '@src/components/Button/Button';
import Form from '@src/components/Form';
import FormControl from '@src/components/FormControl';
import Input from '@src/components/Input';
import Modal from '@src/components/Modal';
import TextArea from '@src/components/TextArea';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateTextField } from '@src/helper/validateForm';
import { BiImageAdd } from 'react-icons/bi';
import './ModalCreate.css';
import { createPost } from '@src/service/post';
import toast from 'react-hot-toast';
type CreatePost = {
	image: File;
	title: string;
	content: string;
};
const validationSchema = Yup.object().shape({
	// image: Yup.mixed().required('Image is required'),
	title: validateTextField({
		fieldName: 'Title',
		required: true,
		minLength: 1,
		maxLength: 156,
	}),
	content: validateTextField({
		fieldName: 'Content',
		required: true,
		minLength: 1,
	}),
});
interface Props {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ModalCreate(props: Props) {
	const { setOpen } = props;
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [imagePreview, setImagePreview] = useState<File | null>(null);
	const [btnSubmitLoading, setBtnSubmitLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, touchedFields, dirtyFields, ...rest },
	} = useForm<CreatePost>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});
	const onSubmit = handleSubmit((value, e) => {
		const formData = new FormData();
		if (imagePreview) {
			formData.append('blog[image]', imagePreview);
		}
		formData.append('blog[title]', value.title);
		formData.append('blog[content]', value.content);
		setBtnSubmitLoading(true);
		createPost(formData)
			.then(res => {
				// console.log(res.data.data);
				setBtnSubmitLoading(false);
				setOpen(false);
				toast.success('Create post success!');
			})
			.catch(err => {
				toast.error('Đã xảy ra lỗi!');
				setBtnSubmitLoading(false);
			});
	});
	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target?.files?.[0]) {
			setImagePreview(e.target?.files?.[0] || null);
		}
	};

	const onClose = () => {
		setOpen(false);
	};
	const openChoiceFile = () => {
		if (inputFileRef.current) {
			inputFileRef.current.click();
		}
	};
	return (
		<Modal
			isOpen
			buttonOkeForForm="form-create"
			onClose={onClose}
			title="Create new post"
			okText="Save"
			isBtnOkeLoading={btnSubmitLoading}
			closeText="Cancel"
		>
			<Form id="form-create" onSubmit={onSubmit}>
				<FormControl label="Image" name="image">
					<Input
						{...register('image')}
						ref={inputFileRef}
						onChange={onFileChange}
						name="image"
						type="file"
						accept="image/*"
						className="d-none"
					/>
					<div className="box-add-file" onClick={openChoiceFile}>
						{imagePreview ? <img src={URL.createObjectURL(imagePreview)} /> : <BiImageAdd />}
					</div>
				</FormControl>
				<FormControl label="Title" name="title" errorMessage={errors.title?.message}>
					<Input {...register('title')} isError={errors.title as undefined} />
				</FormControl>
				<FormControl label="Content" name="content" errorMessage={errors.content?.message}>
					<TextArea {...register('content')} rows={6} isError={errors.content as undefined} />
				</FormControl>
			</Form>
		</Modal>
	);
}
