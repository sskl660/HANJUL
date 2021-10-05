import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
		pageNumbers.push(i);
	}
	return (
		<div>
			<ul className="pagination">
			<li><span onClick={() => paginate(1)}>이전</span></li>
				{pageNumbers.map(number => (
					<li key={number}>
						<span onClick={() => paginate(number)} >{number}</span>
					</li>
				))}
			<li><span onClick={() => paginate(Math.ceil(totalPosts/postsPerPage))}>다음</span></li>
			</ul>
		</div>
	)
}

export default Pagination