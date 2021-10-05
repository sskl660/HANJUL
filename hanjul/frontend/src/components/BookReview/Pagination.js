import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
		pageNumbers.push(i);
	}
	return (
		<div>
			<ul className="pagination">
			<li><a onClick={() => paginate(1)}>이전</a></li>
				{pageNumbers.map(number => (
					<li key={number}>
						<a onClick={() => paginate(number)} >{number}</a>
					</li>
				))}
			<li><a onClick={() => paginate(Math.ceil(totalPosts/postsPerPage))}>다음</a></li>
			</ul>
		</div>
	)
}

export default Pagination