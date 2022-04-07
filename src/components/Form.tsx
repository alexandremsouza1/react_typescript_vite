import React from 'react';

export interface FormProps extends React.HTMLProps<HTMLFormElement> {
	titleCate?: string;
	children?: React.ReactNode;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
	const { titleCate, children, ...rest } = props;
	return (
		<form {...rest} ref={ref}>
			{titleCate && <h2 className="my-2 mb-5">{titleCate}</h2>}
			{children}
		</form>
	);
});

Form.displayName = 'Form';

export default Form;
