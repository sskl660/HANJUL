import './components/MyLibrary/MyLibrary.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import { getUser } from './redux'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapDispatchToProps = {
  getUser
}

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}

function MyLibrary({user}) {
  const [book, setBook] = useState([]);
  // console.log('김싸피',user);
  const mybooks = () => {
    axios({
      url: `http://3.34.123.84:8080/library/${user.userId}`,
      method: 'GET',
    }).then(res => {
      // console.log(res)
      setBook(res.data)
    })
  };

  useEffect(() => {
    mybooks();
  }, [])

  // console.log("북북", book.[0].mybookIsbn);

  return (
    <div className="myLibrary">
      <div className="myLibrary-wrapper">
        {book.map((mybook) => {
          return (
            <div className="myLibrary-cols">
              <Link to={`/book-detail/${mybook.mybookIsbn}`}>
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
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary)