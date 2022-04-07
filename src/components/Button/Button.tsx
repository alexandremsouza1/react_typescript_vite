import React from 'react';
import classNames from 'classnames';
import { VscLoading } from 'react-icons/vsc';
import './Button.css';
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
	htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	children?: React.ReactNode;
	block?: boolean;
	isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { type = 'primary', htmlType = 'button', block, isLoading, children, ...rest } = props;
	return (
		<button
			{...rest}
			ref={ref}
			type={htmlType}
			className={classNames(
				'btn',
				`btn-${type}`,
				{
					'd-block w-100': block,
				},
				rest.className,
			)}
		>
			{isLoading && <VscLoading className="icon-btn-loading" />}
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
