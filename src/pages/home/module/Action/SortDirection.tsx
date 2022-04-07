import Select from '@src/components/Select';
import useQueryUrl from '@src/hooks/useQueryUrl';
import { arrPostSortDirection, PostSortDirection } from '@src/types/service/post';
import React from 'react';

export default function SortDirection() {
	const [{ sort_direction }, changeQuery] = useQueryUrl();
	const defaultValueSelect: PostSortDirection = arrPostSortDirection.includes(sort_direction)
		? (sort_direction as PostSortDirection)
		: 'desc';
	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		changeQuery({ sort_direction: e.target.value });
	};
	return (
		<div className="form-inline">
			<label htmlFor="sort_direction" className="mr-2">
				Sort direction
			</label>
			<Select id="sort_direction" defaultValue={defaultValueSelect} onChange={onChange}>
				{arrPostSortDirection.map(item => (
					<option value={item} key={item}>
						{item.toLocaleUpperCase()}
					</option>
				))}
			</Select>
		</div>
	);
}
