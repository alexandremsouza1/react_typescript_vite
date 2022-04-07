import React from 'react';
import { paramsToQueryUrl } from '@src/helper/params';
import useQueryUrl from '@src/hooks/useQueryUrl';
import classNames from 'classnames';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { DOT, generatePageRange } from './GenarerPaginaitonArrray';
interface Props {
	currentPage: number;
	totalPage: number;
}
export default function PaginationComponent(props: Props) {
	const { currentPage, totalPage } = props;
	const paginationRange = generatePageRange(currentPage, totalPage);
	const [params] = useQueryUrl();
	if (paginationRange.length <= 1) return null;
	return (
		<ul className="pagination">
			{paginationRange.map((item: any) => {
				if (item === DOT) {
					return (
						<li key={uuid()} className="page-item disabled">
							<a className="page-link" href="#">
								{item}
							</a>
						</li>
					);
				}
				return (
					<li
						key={uuid()}
						className={classNames('page-item', {
							active: item === currentPage,
						})}
					>
						<Link
							className="page-link"
							to={`?${paramsToQueryUrl({
								...params,
								page: item,
							})}`}
						>
							{item}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
