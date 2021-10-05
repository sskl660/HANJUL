import './Recommend.css'
import { useEffect, useState } from 'react';
import RecommendedBook from './RecommendedBook';
import { connect } from 'react-redux';
import { login, logout, getUser, getRecommend } from '../redux';
import axios from 'axios';
import { URL } from '../constants/global';

let bookList = [
];

let historyList = [];

const getSentences = () => {
  axios({
    method: 'get',
    url: URL + 'history'
  })
  .then(res => {
    res.data.forEach((history, index) => {
      historyList.push(<li key={history}>{history}</li>)
    })
    return res
  })
  .catch(err => {
    return err
  })
}

let h1= 0,
h2 = 1,
h3 = 2,
h4 = 3,
h5 = 4

const mapStateToProps = (props) => {
  return {
    user: props.users.user,
    recommend: props.recommend.recommend
  }
}

const mapDispatchToProps = {
  login, logout, getUser, getRecommend
}

function Recommend({ user, recommend }) {
  const [showHistories, setShowHistories] = useState([]);
  const [books, setBooks] = useState([]);

  function getBooks() {
    recommend.books.forEach((book, index) => {
      if (bookList.length < 5) {
        bookList.push(<RecommendedBook key={book.isbn} book={book} />)
      }
    })
  }

  useEffect(() => {
    getSentences();
    setBooks(recommend);
    getBooks();
    var carousel = document.getElementsByClassName('carousel')[0],
        slider = carousel.getElementsByClassName('carousel__slider')[0],
        items = carousel.getElementsByClassName('carousel__slider__item')

    var width, height, totalWidth, margin = 20,
        currIndex = 0
    
    function init() {
      resize();
      move(3); // 3번째로 focus
      bindEvents();
    }

    function resize() {
      width = Math.max(window.innerWidth * .23, 275)
      // height = window.innerHeight * .5
      height = window.innerHeight * .33
      totalWidth = width * items.length;
    
      // slider.style.width = totalWidth + "px";
      slider.style.width = totalWidth + "px";
      
      for(var i = 0; i < items.length; i++) {
        let item = items[i];
        // item.style.width = (width - (margin * 2)) + "px";
        item.style.width = (width - (margin * 10)) + "px";
        item.style.height = height + "px";
      }
    }
    
    function move(index) {
      currIndex = index;

      for(var i = 0; i < 5; i++) {
        let item = items[i],
          box = item.getElementsByClassName('item__3d-frame')[0];
        if(i === (index - 1)) {
          item.classList.add('carousel__slider__item--active');
          box.style.transform = "perspective(1200px)"; 
        } else {
          item.classList.remove('carousel__slider__item--active');
          box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
        }
      }
      
      slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
    }
    
    function bindEvents() {
      window.onresize = resize;
    }
    init();
    
    const setSentences = () => {
      h1 < 9 ? h1++ : h1 = 0; 
      h2 < 9 ? h2++ : h2 = 0;
      h3 < 9 ? h3++ : h3 = 0;
      h4 < 9 ? h4++ : h4 = 0;
      h5 < 9 ? h5++ : h5 = 0;
      setShowHistories([historyList[h1], historyList[h2], historyList[h3], historyList[h4], historyList[h5]])
      console.log(h1, h5)
      console.log(showHistories)
    }

    const sentenceInterval = setInterval(setSentences, 5000);
    
    setSentences();

    return () => {
      clearInterval(sentenceInterval)
    }
  }, [])
  return (
    <div className="recommend-page">
      <p className="recommend-title">
        <span>"</span>
        <span>{recommend.hanjul}</span>
        <span>"</span>
      </p>
      <div className="carousel">
        <div className="carousel__body">
          <div className="carousel__slider">
            {bookList}
          </div>
        </div>
      </div>
      <ul className="recommend-history">
        {showHistories}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)