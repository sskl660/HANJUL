import { Component } from "react";
import './components/MyLibrary/MyLibrary.css';

class MyLibrary extends Component {
  render () {
    return (
      <div className="myLibrary">
        <div className="myLibrary-wrapper">
          <h1>나의 서재</h1>
          <div className="myLibrary-cols">
            <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
              <div className="myLibrary-container">
                <div className="front">
                  <div className="inner">
                    <p>책 제목</p>
                    <span>저자</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="bookDes">여기에 간단한 책 설명이나 내가 썼던 문장을 보이게 하면 어떨까?</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 위의 것을 하나의 책 컴포넌트로 빼고 여기서 리스트로 불러오기 */}
            <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
              <div className="myLibrary-container">
                <div className="front">
                  <div className="inner">
                    <p>안나 카레니나</p>
                    <span>어쩌구저쩌구</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="bookDes">여기에 간단한 책 설명이나 내가 썼던 문장을 보이게 하면 어떨까?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
              <div className="myLibrary-container">
                <div className="front">
                  <div className="inner">
                    <p>책 제목</p>
                    <span>저자</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="bookDes">여기에 간단한 책 설명이나 내가 썼던 문장을 보이게 하면 어떨까?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
              <div className="myLibrary-container">
                <div className="front">
                  <div className="inner">
                    <p>책 제목</p>
                    <span>저자</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="bookDes">여기에 간단한 책 설명이나 내가 썼던 문장을 보이게 하면 어떨까?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
              <div className="myLibrary-container">
                <div className="front">
                  <div className="inner">
                    <p>책 제목</p>
                    <span>저자</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="bookDes">여기에 간단한 책 설명이나 내가 썼던 문장을 보이게 하면 어떨까?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
              <div className="myLibrary-container">
                <div className="front">
                  <div className="inner">
                    <p>책 제목</p>
                    <span>저자</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="bookDes">여기에 간단한 책 설명이나 내가 썼던 문장을 보이게 하면 어떨까?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
              <div className="myLibrary-container">
                <div className="front">
                  <div className="inner">
                    <p>책 제목</p>
                    <span>저자</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="bookDes">여기에 간단한 책 설명이나 내가 썼던 문장을 보이게 하면 어떨까?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyLibrary