import LayoutPage from '@src/layout/LayoutPage';
import PostDetail from '@src/pages/post-detail/PostDetail';
import React, { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { RoutePageUrl } from './RoutePageUrl';
import WrapperRoutePage from './WrapperRoutePage';

const NotFoundPage = lazy(() => import('@src/pages/error/404'));
const Home = lazy(() => import('@src/pages/home/Home'));
const Login = lazy(() => import('@src/pages/auth/Login/Login'));
const Register = lazy(() => import('@src/pages/auth/Register/Register'));
const Logout = lazy(() => import('@src/pages/auth/Logout'));

const listRouter: RouteObject[] = [
	// {
	// 	element: <WrapperRoutePage title="Login to blog" element={<Login />} />,
	// 	path: RoutePageUrl.LOGIN,
	// },
	// {
	// 	element: <WrapperRoutePage title="Register" element={<Register />} />,
	// 	path: RoutePageUrl.REGISTER,
	// },
	{
		path: RoutePageUrl.HOME_PAGE,
		element: <LayoutPage />,
		children: [
			{
				index: true,
				element: <WrapperRoutePage title="Home" element={<Home />} />,
			},
			{
				path: '/post/:id',
				element: <WrapperRoutePage element={<PostDetail />} />,
			},
			{
				path: RoutePageUrl.LOGOUT,
				element: <WrapperRoutePage title="logout" element={<Logout />} />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];
export default function RenderRouter() {
	const element = useRoutes(listRouter);
	return element;
}
