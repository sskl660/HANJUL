import { useState, useEffect } from "react";
import './components/BookDetail/BookDetail.css';
import { FaStar } from 'react-icons/fa'; // react icon에 있는 별 이미지 사용
import BookSlider from './components/BookDetail/BookSlider';
import Review from './components/BookReview/Review';
import axios from 'axios';
import Posts from './components/BookReview/Post'
import Pagination from './components/BookReview/Pagination'

const ARRAY = [0, 1, 2, 3, 4];

const comments = [
  { name: '김싸피', content: '이 책을 추천합니다' },
  {name: '김싸피', content: '이 책을 추천합니다'},
  {name: '김싸피', content: '이 책을 추천합니다'},
  {name: '김싸피', content: '이 책을 추천합니다'},
]

function BookDetail() {
  // 북마크 클릭
  const [bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  }
  // 별점 클릭
  // Boolean 값을 사용해서 별(svg) 갯수를 표시하겠다
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  // 별 클릭한 el 값을 index로
  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
    // let score = clicked.filter(Boolean).length;
    
  };

  // 한줄평 pagination
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      // setLoading(false);
    }
      
    fetchPosts();
  }, []);

  console.log(posts);
  // 현재 페이지 가져오기
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 바꾸기
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const slides = [
    { image: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg' },
    { image: 'image/javabook.png'},
    { image: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg' },
    { image: 'image/javabook.png' },
    { image: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg' },
    { image: 'image/javabook.png' },
    { image: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg' },
    { image: 'image/javabook.png' },
    { image: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg' },
    { image: 'image/javabook.png' },
    { image: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg' },
    { image: 'image/javabook.png' },
  ];

  return (
    <div className="bookDetail">
      <div className="bookmarkIcon" onClick={handleBookmark}>
        {bookmark ? (<i className="far fa-bookmark fa-4x bookmark-img"></i>)
          : (<i className="fas fa-bookmark fa-4x bookmark-img"></i>)
        }
      </div>
      <div className="bookD-info d-flex justify-content-center">
        <div className="bookD-infoL">
          <div className="bookD-bookImg">
          <img src="image/javabook.png" className="bookD-detailImg" alt="" />
          </div>
          <div className="bookD-bookGrade">
            <div className="bookD-totalStars">
              <div className="bookD-totalStar">
                {ARRAY.map((el, idx) => {
                  return (
                    <FaStar
                      key={idx}
                      size="36"
                      className={clicked[el] && 'yellowStar'}
                    />
                  );
                })}
              </div>
            </div>
            <div className="totalScore">5점</div>
          </div>
        </div>
        <div className="bookD-infoR">
          <div className="bookD-bookInfo">
            <h3>도서명</h3>
          </div>
          <div className="bookD-bookInfo">
            <h3>저자</h3>
          </div>
          <div className="bookD-bookInfo">
            <h3>출판사</h3>
          </div>
          <div className="bookD-bookIntro">
            <h3>소개</h3>
          </div>
        </div>
      </div>
      <div className="bookD-recommend">
        <div className="booD-slider">
          <BookSlider slides={slides}/>
        </div>
      </div>
      <div className="bookD-review">
        <p className="bookD-reviewTitle">한줄평</p>
        <div className="bookD-reviewBox d-flex justify-content-center">
          {/* 평점 별 구현 */}
          <div className="bookD-stars">
            <div className="bookD-star">
              {ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="40"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && 'yellowStar'}
                  />
                );
              })}
            </div>
          </div>
          <div className="bookD-reviewInput">
            <input type="text" placeholder="의견을 남겨주세요" autoFocus />
          </div>
          <button className="bookD-btn">입력</button>
        </div>
        <div className="bookD-reviewShow">
          <Posts posts={currentPosts} />
          {/* {comments.map((comment, index) => {
            return (
              <Review name={comment.name} content={comment.content} />
            )
          })} */}
        </div>
        <div className="bookD-pagination">
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
          {/* <ul className="pagination">
            <li><a href="">이전</a></li>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li><a href="">6</a></li>
            <li><a href="">7</a></li>
            <li><a href="">8</a></li>
            <li><a href="">다음</a></li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default BookDetail