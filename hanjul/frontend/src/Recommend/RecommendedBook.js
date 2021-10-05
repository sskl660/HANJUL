import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const mapStateToProps = (props) => {
  return {
    user: props.users.user,
    recommend: props.recommend.recommend
  }
}

function RecommendedBook(props) {
  const [books, setBooks] = useState([]);
  const [bookList] = useState([]);
  const history = useHistory();

  function getBooks() {
    props.recommend.books.forEach((book, index) => {
      if (bookList.length < 5) {
        bookList.push(
          <div className="carousel__slider__item" onClick={e => history.push('/book-detail/'+book.isbn)}>
            <div className="item__3d-frame">
              <div className="item__3d-frame__box item__3d-frame__box--front">
                <img src={book.img_url} alt="" className="item-img" />
              </div>
              <div className="item__3d-frame__box item__3d-frame__box--left">
                <img src={book.img_url} alt="" className="book-side" />
              </div>
              <div className="item__3d-frame__box item__3d-frame__box--right"></div>
            </div>
          </div>
        )
      }
    })
  }
  getBooks();

  useEffect(() => {
    setBooks(props.recommend);
    var carousel = document.getElementsByClassName('carousel')[0],
    slider = carousel.getElementsByClassName('carousel__slider')[0],
    items = carousel.getElementsByClassName('carousel__slider__item')

    var width, height, totalWidth, margin = 20

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
      for(var i = 0; i < items.length; i++) {
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

    return () => {
    }
  }, [])
  return (
    <div className="carousel">
      <div className="carousel__body">
        <div className="carousel__slider">
          {bookList}
        </div>
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(RecommendedBook)