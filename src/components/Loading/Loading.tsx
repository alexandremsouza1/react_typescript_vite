import classNames from 'classnames';
import React from 'react';
import './Loading.css';
interface Props {
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}
export default function Loading(props: Props) {
	const { type = 'primary' } = props;
	const className = `text-${type}`;
	return (
		<div className={classNames('spinner-border', className)} role="status">
			<span className="sr-only">Loading...</span>
		</div>
	);
}
export function LoadingPage(props: Props) {
	const { type = 'primary' } = props;
	const className = `text-${type}`;
	return (
		<div className="loading-page-container">
			<div className={classNames('spinner-border', className)} role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
