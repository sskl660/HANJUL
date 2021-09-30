import React from 'react';
import './Review.css';

class Review extends React.Component{
	render() {
		return (
			<div className="reviewBox">
				<div className="reviewStar">
					평점 별
				</div>
				<div className="nameText">
					{this.props.name}
				</div>
				<div className="contentText">
					{this.props.content}
				</div>
			</div>	
		)
	}
}

export default Review;