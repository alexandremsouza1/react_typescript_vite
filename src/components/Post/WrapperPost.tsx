import React from 'react';
import './WrapperPost.css';

interface Props {
	children: React.ReactNode;
}
export default function WrapperPost(props: Props) {
	const { children } = props;
	return <div className="wrapper-post">{children}</div>;
}
