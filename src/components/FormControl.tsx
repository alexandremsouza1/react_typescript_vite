import React from 'react';

export interface FormControlProps extends React.HTMLProps<HTMLDivElement> {
	label?: string;
	name?: string;
	children?: React.ReactNode;
	errorMessage?: React.ReactNode;
}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
	const { label, name, errorMessage, children, ...rest } = props;
	return (
		<div {...rest} ref={ref} className="form-group mt-4">
			{label && <label htmlFor={name}>{label}</label>}
			{children}
			{errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
		</div>
	);
});

FormControl.displayName = 'FormControl';

export default FormControl;
