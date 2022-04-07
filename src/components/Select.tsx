import classNames from 'classnames';
import React from 'react';
export type Option = {
	label: string;
	value: any;
};
export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
	isError?: boolean;
	options?: Option[];
	children?: React.ReactNode;
}
const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { options, children, ...rest } = props;
	return (
		<select {...rest} ref={ref} className={classNames('form-control', rest.className)}>
			{children
				? children
				: options?.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
				  ))}
		</select>
	);
});
Select.displayName = 'Select';
export default Select;
