import React from 'react';
import classNames from 'classnames';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
	type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
	isError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { type = 'text', isError, ...rest } = props;
	return (
		<input
			{...rest}
			ref={ref}
			type={type}
			id={rest.id || rest.name}
			className={classNames(
				{
					'is-invalid': isError,
					'form-control': type !== 'file',
					'form-control-file': type === 'file',
				},
				rest.className,
			)}
		/>
	);
});

Input.displayName = 'Input';

export default Input;
