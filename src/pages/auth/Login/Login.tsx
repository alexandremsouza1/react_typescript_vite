import Button from '@src/components/Button/Button';
import Form from '@src/components/Form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import FormControl from '@src/components/FormControl';
import Input from '@src/components/Input';
import './Login.css';
import Card from '@src/components/Card';
import { RoutePageUrl } from '@src/routes/RoutePageUrl';

type UserSubmitForm = {
	email: string;
	password: string;
};
const validationSchema = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.max(64, 'Password must not exceed 64 characters'),
});

export default function Login() {
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
		<div className="login-form">
			<Card>
				<Form titleCate="Login to blog" onSubmit={handleSubmit(onSubmit)}>
					<FormControl label="Email" name="email" errorMessage={errors.email?.message}>
						<Input {...register('email')} isError={errors.email as undefined} />
					</FormControl>
					<FormControl label="Password" name="password" errorMessage={errors.password?.message}>
						<Input {...register('password')} type="password" isError={errors.password as undefined} />
					</FormControl>
					<FormControl>
						<Button block htmlType="submit">
							Login
						</Button>
					</FormControl>
				</Form>
				<Link to={RoutePageUrl.REGISTER}>Register new account</Link>
			</Card>
		</div>
	);
}
