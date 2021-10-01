import './components/MyLibrary/MyLibrary.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function MyLibrary() {
  const [book, setBook] = useState([]);

  const mybooks = () => {
    axios({
      url: `http://3.34.123.84:8080/library/kimssafy`,
      method: 'GET',
    }).then(res => {
      console.log(res)
      setBook(res.data)
    })
  };

  useEffect(() => {
    mybooks();
  }, [])

  console.log(book);

  return (
    <div className="myLibrary">
      <div className="myLibrary-wrapper">
        {book.map((mybook) => {
          return (
            <div className="myLibrary-cols">
              <div className="myLibrary-col" ontouchstart="this.classList.toggle('hover');">
                <div className="myLibrary-container">
                  <div className="front" style={{ backgroundImage: `url(${mybook.mybookImgurl})` }}>
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

export default MyLibrary