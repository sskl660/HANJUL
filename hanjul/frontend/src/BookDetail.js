import { useState, useEffect } from "react";
import './components/BookDetail/BookDetail.css';
import { FaStar } from 'react-icons/fa'; // react icon에 있는 별 이미지 사용

const ARRAY = [0, 1, 2, 3, 4];

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
    // let score = clicked.filter(Boolean).length;
    
  };

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
        {/* <div className="booD-slider">
        <BookSlider />
        </div> */}
        <div className="bookD-books">
          <img src="image/javabook.png" className="bookD-book" alt="" />
          <img src="image/javabook.png" className="bookD-book" alt="" />
          <img src="image/javabook.png" className="bookD-book" alt="" />
          <img src="image/javabook.png" className="bookD-book" alt="" />
          <img src="image/javabook.png" className="bookD-book" alt="" />
          <img src="image/javabook.png" className="bookD-book" alt="" />
          <img src="image/javabook.png" className="bookD-book" alt="" />
          <img src="image/javabook.png" className="bookD-book" alt="" />
          {/* <img src="image/javabook.png" className="bookD-book" alt="" /> */}
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
          
        </div>
        <div className="bookD-pagination">
          <ul className="pagination">
            <li><a href="#">이전</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">7</a></li>
            <li><a href="#">8</a></li>
            <li><a href="#">다음</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BookDetail