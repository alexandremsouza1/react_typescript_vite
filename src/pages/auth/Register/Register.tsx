import React from 'react';
import Button from '@src/components/Button/Button';
import Form from '@src/components/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import FormControl from '@src/components/FormControl';
import Input from '@src/components/Input';
import Card from '@src/components/Card';

import './Register.css';
import { RoutePageUrl } from '@src/routes/RoutePageUrl';

type UserSubmitForm = {
	name: string;
	email: string;
	password: string;
};
const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name is required')
		.min(3, 'Name must be at least 3 characters')
		.max(40, 'Name must not exceed 50 characters'),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.max(64, 'Password must not exceed 64 characters'),
});

export default function Register() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, touchedFields, dirtyFields, ...rest },
	} = useForm<UserSubmitForm>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});
	const navigate = useNavigate();
	const onSubmit = (value: UserSubmitForm) => {
		console.log('Received values of form: ', value);
		// navigate('/');
	};

	return (
		<div className="register-form">
			<Card>
				<Form titleCate="Register new account" onSubmit={handleSubmit(onSubmit)}>
					<FormControl label="Name" name="name" errorMessage={errors.name?.message}>
						<Input {...register('name')} isError={errors.name as undefined} />
					</FormControl>
					<FormControl label="Email" name="email" errorMessage={errors.email?.message}>
						<Input {...register('email')} isError={errors.email as undefined} />
					</FormControl>
					<FormControl
						label="Password"
						name="password"
						type="password"
						errorMessage={errors.password?.message}
					>
						<Input {...register('password')} isError={errors.password as undefined} />
					</FormControl>
					<FormControl>
						<Button block htmlType="submit">
							Register
						</Button>
					</FormControl>
				</Form>
				<Link to={RoutePageUrl.LOGIN}>Login to blog</Link>
			</Card>
		</div>
	);
}
