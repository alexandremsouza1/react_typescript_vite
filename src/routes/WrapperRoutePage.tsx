import AnimationPage from '@src/components/AnimationPage';
import React, { useEffect } from 'react';
import { RouteProps } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';

export interface WrapperRoutePageProps extends RouteProps {
	title?: string;
}
export default function WrapperRoutePage({ title, ...props }: WrapperRoutePageProps) {
	useEffect(() => {
		document.title = title || document.title;
	}, []);
	return (
		<>
			<PrivateRouter {...props} />
		</>
	);
}
