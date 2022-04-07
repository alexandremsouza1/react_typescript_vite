import React, { useEffect } from 'react';

export default function Logout() {
	useEffect(() => {
		localStorage.removeItem('token');
		window.location.href = 'login';
	}, []);

	return <div>Logout</div>;
}
