import { configApp } from '@src/config/config';
import { RoutePageUrl } from '@src/routes/RoutePageUrl';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSearch from './FormSearch';

export default function Header() {
	const [isOpenMenu, setOpenMenu] = useState(false);
	const onToggleMenu = () => {
		setOpenMenu(!isOpenMenu);
	};
	return (
		<header className="navbar-dark bg-dark">
			<nav className="navbar navbar-expand-lg container">
				<Link className="navbar-brand" to={RoutePageUrl.HOME_PAGE}>
					{configApp.APP_NAME}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={onToggleMenu}
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className={classNames('collapse navbar-collapse', {
						show: isOpenMenu,
					})}
				>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to={RoutePageUrl.HOME_PAGE}>
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
					{/* search */}
					<FormSearch />
				</div>
			</nav>
		</header>
	);
}
