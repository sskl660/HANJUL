import { Component } from "react";
import './components/MyLibrary/MyLibrary.css';

const mybooks = [
  {
    "mybookAuthor": "저자1",
    "mybookDesc": "책설명1",
    "mybookImgurl": "http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg",
    "mybookIsbn": "1",
    "mybookTitle": "책제목1"
  },
  {
    "mybookAuthor": "저자2",
    "mybookDesc": "책설명2",
    "mybookImgurl": "string",
    "mybookIsbn": "2",
    "mybookTitle": "책제목2"
  },
  {
    "mybookAuthor": "저자3",
    "mybookDesc": "책설명3",
    "mybookImgurl": "string",
    "mybookIsbn": "3",
    "mybookTitle": "책제목3"
  },
  {
    "mybookAuthor": "저자4",
    "mybookDesc": "책설명4",
    "mybookImgurl": "string",
    "mybookIsbn": "4",
    "mybookTitle": "책제목4"
  },
  {
    "mybookAuthor": "저자5",
    "mybookDesc": "책설명5",
    "mybookImgurl": "string",
    "mybookIsbn": "5",
    "mybookTitle": "책제목4"
  },
  {
    "mybookAuthor": "저자6",
    "mybookDesc": "책설명6",
    "mybookImgurl": "string",
    "mybookIsbn": "6",
    "mybookTitle": "책제목4"
  },
  {
    "mybookAuthor": "저자7",
    "mybookDesc": "책설명7",
    "mybookImgurl": "string",
    "mybookIsbn": "7",
    "mybookTitle": "책제목4"
  },
]

class MyLibrary extends Component {
  render () {
    return (
      <div className="myLibrary">
        <div className="myLibrary-wrapper">
          {mybooks.map((mybook, index) => {
            return (
              <div className="myLibrary-cols">
                <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
                  <div className="myLibrary-container">
                    <div className="front" style={{backgroundImage: `url({mybook.mybookImgurl})`}}>
                      <div className="inner">
                        <p>{mybook.mybookTitle}</p>
                        <span>{mybook.mybookAuthor}</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <p className="bookDes">{mybook.mybookDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default MyLibrary