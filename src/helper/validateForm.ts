/* eslint-disable prefer-const */
import * as Yup from 'yup';
export interface IValidateTextField {
	fieldName: string;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
}
export const validateTextField = (options: IValidateTextField) => {
	const { fieldName, required, minLength, maxLength } = options;
	let validation = Yup.string();
	if (required) {
		validation = validation.required(`${fieldName} is required!`);
	}
	if (minLength) {
		validation = validation.min(minLength, `${fieldName} must be at least ${minLength} characters`);
	}
	if (maxLength) {
		validation = validation.max(maxLength, `${fieldName} must be at most ${maxLength} characters`);
	}
	return validation;
};
