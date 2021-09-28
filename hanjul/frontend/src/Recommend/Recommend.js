import './Recommend.css'
import { useEffect, useState } from 'react';
import RecommendedBook from './RecommendedBook';

let books = [
  {
    isbn13: 9788959752089,
    title: '안나 카레니나1',
    author: '톨스토이',
    publisher: '민음사',
    pub_date: '2021-09-28',
    img_url: 'http://image.aladin.co.kr/product/461/57/cover/s852532176_1.jpg',
    description: '책',
    is_coll_aladin: 'Y',
    is_coll_naver: 'Y',
    isbn_origin: 9788959752089
  },
  {
    isbn13: 9788959752089,
    title: '운수 좋은 날',
    author: '현진건',
    publisher: '민음사',
    pub_date: '2021-09-28',
    img_url: 'http://image.aladin.co.kr/product/587/12/cover/8974112515_1.jpg',
    description: '책',
    is_coll_aladin: 'Y',
    is_coll_naver: 'Y',
    isbn_origin: 9788959752089
  },
  {
    isbn13: 9788959752089,
    title: '안나 카레니나3',
    author: '톨스토이',
    publisher: '민음사',
    pub_date: '2021-09-28',
    img_url: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg',
    description: '책',
    is_coll_aladin: 'Y',
    is_coll_naver: 'Y',
    isbn_origin: 9788959752089
  },
  {
    isbn13: 9788959752089,
    title: '안나 카레니나4',
    author: '톨스토이',
    publisher: '민음사',
    pub_date: '2021-09-28',
    img_url: 'https://bookthumb-phinf.pstatic.net/cover/061/861/06186150.jpg?type=m1&udate=20120410',
    description: '책',
    is_coll_aladin: 'Y',
    is_coll_naver: 'Y',
    isbn_origin: 9788959752089
  },
  {
    isbn13: 9788959752089,
    title: '안나 카레니나5',
    author: '톨스토이',
    publisher: '민음사',
    pub_date: '2021-09-28',
    img_url: 'https://bookthumb-phinf.pstatic.net/cover/061/894/06189451.jpg?type=m1&udate=20170519',
    description: '책',
    is_coll_aladin: 'Y',
    is_coll_naver: 'Y',
    isbn_origin: 9788959752089
  },
]; // 데이터 받아와서 넣어주기

let bookList = [];
books.forEach((book, index) => {
  bookList.push(<RecommendedBook key={index} book={book} />)
})


let histories = [
  '파이썬 공부를 하고 싶다',
  '퇴실체크!',
  '리액트 공부 화이팅',
  '취업하고싶다',
  '자기계발서를 읽어보고 싶어요',
  '이거 어떻게 쓰는건가요?',
  '인문학 책을 읽고 싶은데 뭘 읽을지 모르겠어요',
  '알고리즘 공부!',
  '컴퓨터 지식 공부'
]

let historyList = [];
histories.forEach((history, index) => {
  historyList.push(<li key={index}>{history}</li>)
})




function Recommend() {
  const [showHistories, setShowHistories] = useState([]);
  let h1= 0,
    h2 = 1,
    h3 = 2,
    h4 = 3,
    h5 = 4

  useEffect(() => {
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
        width = Math.max(window.innerWidth * .25, 275)
        // height = window.innerHeight * .5
        height = window.innerHeight * .35
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
    
    function prev() {
      move(--currIndex);
    }
    
    function next() {
      move(++currIndex);    
    }
    
    function bindEvents() {
        window.onresize = resize;
        next()
        prev()
    }
  
    init();
    
    const setSentences = () => {
      h1 < historyList.length - 1 ? h1 ++ : h1 = 0;
      h2 < historyList.length - 1 ? h2 ++ : h2 = 0;
      h3 < historyList.length - 1 ? h3 ++ : h3 = 0;
      h4 < historyList.length - 1 ? h4 ++ : h4 = 0;
      h5 < historyList.length - 1 ? h5 ++ : h5 = 0;
      setShowHistories([historyList[h1], historyList[h2], historyList[h3], historyList[h4], historyList[h5]])
    }

    const sentenceInterval = setInterval(setSentences, 5000);
    
    setSentences()

    return () => {
      clearInterval(sentenceInterval)
    }
  }, [])
  return (
    <div className="recommend-page">
      <p className="recommend-title">
        <span>"</span>
        <span>나는 책이 좋다!</span>
        <span>"</span>
      </p>
      <div class="carousel">
        <div class="carousel__body">
          <div class="carousel__slider">
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

export default Recommend