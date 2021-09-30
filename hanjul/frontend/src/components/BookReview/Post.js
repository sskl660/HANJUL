import React from 'react';
import './Review.css';

const Posts = ({ posts }) => {
	// if (loading) {
	// 		return <h2>Loading...</h2>;
	// }

	return (
		// <ul className="list-group mb-4">
		// 	{posts.map(post => (
		// 		<li key={post.id}>
		// 			{post.title}
		// 		</li>
		// 	))}
		// </ul>

	<div className="reviewBox">
		{posts.map(post => (
			<div key={post.id}>
				<div className="reviewStar">
					평점 별
				</div>
				<div className="nameText">
					{post.id}
				</div>
				<div className="contentText">
					{post.title}
				</div>
			</div>
		))}
	</div>	
	)
}

export default Posts