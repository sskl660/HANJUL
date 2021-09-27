import { useState } from "react";
import './components/BookDetail/BookDetail.css';

function BookDetail (){
  const [bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  }
  return (
    <div className="bookDetail">
      <div className="bookmarkIcon" onClick={handleBookmark}>
        {bookmark ? (<i className="far fa-bookmark fa-3x bookmark-img"></i>)
          : (<i className="fas fa-bookmark fa-3x bookmark-img"></i>)
        }
      </div>
      <div className="bookD-info d-flex justify-content-center">
        <div className="bookD-infoL">
          <div className="bookD-bookImg">
            <img src="" alt="" />
          </div>
          <div className="bookD-bookGrade">
            <h3>5점</h3>
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
            <h3>출판사 출판일</h3>
          </div>
          <div className="bookD-bookIntro">
            <h3>소개</h3>
          </div>
        </div>
      </div>
      <div className="bookD-recommend">
        
      </div>
      <div className="bookD-review">
        <p className="bookD-reviewTitle">한줄평</p>
        <div className="bookD-reviewBox d-flex justify-content-center">
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