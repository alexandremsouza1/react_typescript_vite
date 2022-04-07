import { RoutePageUrl } from '@src/routes/RoutePageUrl';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{
				height: '100vh',
			}}
			id="main"
		>
			<h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
			<div className="inline-block align-middle">
				<h2 className="font-weight-normal lead" id="desc">
					Sorry, the page you visited does not exist.
				</h2>
				<Link to={RoutePageUrl.HOME_PAGE}>Back Home</Link>
			</div>
		</div>
	);
}
