import useQueryUrl from '@src/hooks/useQueryUrl';
import React from 'react';
import Button from '../Button/Button';

export default function FormSearch() {
	const [{ search }, changeQuery] = useQueryUrl();
	const [value, setValue] = React.useState('');
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const onSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		changeQuery({ search: value, page: 1 });
	};
	return (
		<form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
			<input
				onChange={onChange}
				defaultValue={search || null}
				className="form-control mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
			/>
			<Button className="bmy-2 my-sm-0" type="success" htmlType="submit">
				Search
			</Button>
		</form>
	);
}
