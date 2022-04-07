import React from 'react';
import classNames from 'classnames';

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
	isError?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
	const { isError, ...rest } = props;
	return (
		<textarea
			{...rest}
			ref={ref}
			className={classNames('form-control', {
				'is-invalid': isError,
			})}
		/>
	);
});

TextArea.displayName = 'TextArea';

export default TextArea;
