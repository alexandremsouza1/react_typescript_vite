import React from 'react';
interface Props {
	children?: React.ReactNode;
}
export default function RootLayout(props: Props) {
	return props.children as React.ReactElement;
}
