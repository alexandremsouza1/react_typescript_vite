import React from 'react';
export interface CardProps {
	children?: React.ReactNode;
}
export default function Card(props: CardProps) {
	const { children } = props;
	return (
		<div className="card">
			<div className="card-body">{children}</div>
		</div>
	);
}
