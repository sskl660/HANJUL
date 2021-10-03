import React from 'react';
import './Review.css';
import { FaStar } from 'react-icons/fa';

const Posts = ({ posts }) => {
	// if (loading) {
	// 		return <h2>Loading...</h2>;
	// }

	const makeStar = (num) => {
		let stars = [];
		for (let i = 0; i < num; i++) {
			stars.push(
				<FaStar size="20" className='yellowStar'/>
			)
		}
		for (let i = 0; i < 5-num; i++) {
			stars.push(
				<FaStar size="20"/>
			)
		}
		return stars;
	}

	return (
	<div className="reviewBox">
		{posts.map(post => (
			<div>
				<div className="reviewStar">
					{makeStar(post.reviewStar)}
				</div>
				<div className="nameText">
					{post.userName}
				</div>
				<div className="contentText">
					{post.reviewComment}
				</div>
			</div>
		))}
	</div>	
	)
}

export default Posts