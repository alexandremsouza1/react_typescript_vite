import Select from '@src/components/Select';
import useQueryUrl from '@src/hooks/useQueryUrl';
import { arrPostSortBy, PostSortBy } from '@src/types/service/post';
import React from 'react';

export default function SortBy() {
	const [{ sort_by }, changeQuery] = useQueryUrl();
	const defaultValueSelect: PostSortBy = arrPostSortBy.includes(sort_by) ? (sort_by as PostSortBy) : 'created_at';
	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		changeQuery({ sort_by: e.target.value });
	};
	return (
		<div className="form-inline mx-4 ">
			<label htmlFor="sort_by" className="mr-2">
				Sort by
			</label>
			<Select id="sort_by" onChange={onChange} defaultValue={defaultValueSelect}>
				{arrPostSortBy.map(item => (
					<option value={item} key={item}>
						{item.toLocaleUpperCase()}
					</option>
				))}
			</Select>
		</div>
	);
}
