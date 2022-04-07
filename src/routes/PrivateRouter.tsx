import { getAccessToken } from '@src/helper/token';
import React, { useEffect } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';

export default function PrivateRouter(props: RouteProps) {
	const navigate = useNavigate();
	// useEffect(() => {
	// 	const accessToken = getAccessToken();
	// 	if (!accessToken) {
	// 		return navigate('login');
	// 	}
	// }, []);
	return props.element as React.ReactElement;
}
