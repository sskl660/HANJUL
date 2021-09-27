import { Component } from "react";
import './components/BookDetail/BookDetail.css'

class BookDetail extends Component {
  render () {
    return (
      <div className="bookDetail">
        <div>
          <button class="bookmark">
              <svg viewBox="0 0 36 36">
                  <path class="filled" d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z" />
                  <path class="default" d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z" />
                  <path class="corner" d="M10 6C10 6 14.8758 6 18 6C21.1242 6 26 6 26 6C26 6 26 6 26 6H10C10 6 10 6 10 6Z" />
              </svg>
          </button>
          {/* <a class="dribbble" href="https://dribbble.com/ai" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""></img></a> */}
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
            <h2>pagination</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default BookDetail