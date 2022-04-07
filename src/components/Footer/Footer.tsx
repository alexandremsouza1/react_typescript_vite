import { configApp } from '@src/config/config';
import { RoutePageUrl } from '@src/routes/RoutePageUrl';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
	return (
		<footer className="footer bg-gray-200 text-center lg:text-left">
			<div className="text-gray-700 text-center p-4">
				© 2021 Copyright :{' '}
				<Link className="text-gray-800" to={RoutePageUrl.HOME_PAGE}>
					{configApp.APP_NAME}
				</Link>
			</div>
		</footer>
	);
}
