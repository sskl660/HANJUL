import { useState, useEffect } from "react";
import './components/BookDetail/BookDetail.css';
import { FaStar } from 'react-icons/fa'; // react icon에 있는 별 이미지 사용
import BookSlider from './components/BookDetail/BookSlider';
import axios from 'axios';
import Posts from './components/BookReview/Post'
import Pagination from './components/BookReview/Pagination'

const ARRAY = [0, 1, 2, 3, 4];

function BookDetail() {
  // 책 상세 정보 요청
  const [bookD, setBookD] = useState([]);
  const bookDetail = () => {
    axios({
      url: `http://3.34.123.84:8080/detail/9788979971415`,
      method: 'GET',
    }).then(res => {
      console.log(res)
      setBookD(res.data)
    })
  };

  useEffect(() => {
    bookDetail();
  }, [])

  // console.log(bookD);

  const makeStar = (num) => {
		let stars = [];
		for (let i = 0; i < num; i++) {
			stars.push(
				<FaStar size="36" className='yellowStar'/>
			)
		}
		for (let i = 0; i < 5-num; i++) {
			stars.push(
				<FaStar size="36"/>
			)
		}
		return stars;
	}

  // 덤프 책 요청
  const [bookDump, setBookDump] = useState([]);
  const bookDumpFile = () => {
    axios({
      url: `http://3.34.123.84:8080/admin/dump`,
      method: 'GET',
    }).then(res => {
      console.log(res)
      setBookDump(res.data)
    })
  };

  useEffect(() => {
    bookDumpFile();
  }, [])

  // console.log(bookDump);

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
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
    // let score = clicked.filter(Boolean).length;
    
  };

  // 한줄평 & pagination
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     // setLoading(true);
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(res.data);
  //     // setLoading(false);
  //   }
      
  //   fetchPosts();
  // }, []);

  const fetchPosts = () => {
    axios({
      url: `http://3.34.123.84:8080/detail/reivew/9788979971415`,
      method: 'GET',
    }).then(res => {
      console.log('이거',res)
      setPosts(res.data)
    })
  };

  useEffect(() => {
    fetchPosts();
  }, [])

  // console.log('제발', posts);
  // 현재 페이지 가져오기
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 바꾸기
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
          <img src={bookD.imgUrl} className="bookD-detailImg" alt="" />
          </div>
          <div className="bookD-bookGrade">
            <div className="bookD-totalStars">
              <div className="bookD-totalStar">
                {makeStar(bookD.avgStar)}
              </div>
            </div>
            <div className="totalScore">{bookD.avgStar}점</div>
          </div>
        </div>
        <div className="bookD-infoR">
          <div className="bookD-bookInfo">
            <h3>{bookD.title}</h3>
          </div>
          <div className="bookD-bookInfo">
            <h3>{bookD.author}</h3>
          </div>
          <div className="bookD-bookInfo">
            <h3>{bookD.publisher}</h3>
          </div>
          <div className="bookD-bookIntro">
            <h3>{bookD.description}</h3>
            {/* <h3>이 책은 저자의 30년 교직 생활의 경험과 가정에서 아이들을 키우며 얻은 경험을 부모 교육 강의라는 형식을 빌어 나누어온 이야기들을 정리한 것이다. 책의 내용 역시 어떤 깊이 있는 이론보다는 자녀를 학교에 보내고 있는 부모라면 누구나 경험하고 느낄 수 있는 평범한 내용들을 사례 중심으로 적어 놓았다.이 책은 저자의 30년 교직 생활의 경험과 가정에서 아이들을 키우며 얻은 경험을 부모 교육 강의라는 형식을 빌어 나누어온 이야기들을 정리한 것이다. 책의 내용 역시 어떤 깊이 있는 이론보다는 자녀를 학교에 보내고 있는 부모라면 누구나 경험하고 느낄 수 있는 평범한 내용들을 사례 중심으로 적어 놓았다.이 책은 저자의 30년 교직 생활의 경험과 가정에서 아이들을 키우며 얻은 경험을 부모 교육 강의라는 형식을 빌어 나누어온 이야기들을 정리한 것이다. 책의 내용 역시 어떤 깊이 있는 이론보다는 자녀를 학교에 보내고 있는 부모라면 누구나 경험하고 느낄 수 있는 평범한 내용들을 사례 중심으로 적어 놓았다.</h3> */}
          </div>
        </div>
      </div>
      <div className="bookD-recommend">
        <div className="booD-slider">
          <BookSlider slides={bookDump}/>
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
          <Posts posts={currentPosts}/>
        </div>
        <div className="bookD-pagination">
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
      </div>
    </div>
  )
}

export default BookDetail