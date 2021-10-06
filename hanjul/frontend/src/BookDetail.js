import { useState, useEffect } from "react";
import './components/BookDetail/BookDetail.css';
import { FaStar } from 'react-icons/fa'; // react icon에 있는 별 이미지 사용
import BookSlider from './components/BookDetail/BookSlider';
import axios from 'axios';
import Posts from './components/BookReview/Post'
import Pagination from './components/BookReview/Pagination'
import { getUser } from './redux'
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import Loading from './Loading';

const mapDispatchToProps = {
  getUser
}

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}

const ARRAY = [0, 1, 2, 3, 4];

function BookDetail({ user }) { //여기에 props 넣어주기
  const { bookIsbn } = useParams();

  // 책 상세 정보 요청
  const [bookD, setBookD] = useState([]);
  const [bookDump, setBookDump] = useState([]);
  const [loading, setLoading] = useState(false);
  const bookDetail = async() => {
    await axios({
      url: `http://3.34.123.84:8080/detail/${bookIsbn}`,
      method: 'GET',
    }).then(res => {
      // console.log(res)
      // console.log("되나 혹시", bookIsbn)
      setBookD(res.data)
      bookD.title = res.data.title;
    })

    // console.log('북디', bookD)
    setLoading(true);
    await axios({
      url: `http://3.34.123.84:8000/hanjul/recommend/?book_title=${bookD.title}`,
      method: 'GET',
      // params: {
      //   "book_title" : bookD.title
      // }
    }).then(res => {
      setBookDump(res.data)
      setLoading(false);
      // setLoading(false);
    }).catch(err => {
      setLoading(false);
      return err
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
  // const [bookDump, setBookDump] = useState([]);
  // const bookDumpFile = () => {
  //   console.log("북디", bookD)
  //   axios({
  //     url: `http://3.34.123.84:8000/hanjul/recommend/?book_title=${bookD.title}`,
  //     method: 'GET',
  //     // params: {
  //     //   "book_title" : bookD.title
  //     // }
  //   }).then(res => {
  //     console.log(res)
  //     setBookDump(res.data)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // };

  // useEffect(() => {
  //   bookDumpFile();
  // }, [])

  // console.log(bookDump);

  // 북마크 클릭
  const [bookmark, setBookmark] = useState(false);
  const isBookmark = () => {
    axios({
      url: `http://3.34.123.84:8080/detail/scrap/${bookIsbn}/${user.userId}`,
      method: 'GET',
    }).then(res => {
      // console.log("북마크 했니 안했니", res)
      setBookmark(res.data)
    })
  };

  // console.log("북마크 확인좀", bookmark)

  useEffect(() => {
    isBookmark();
  }, [])

  const handleBookmark = () => {
    const data = {
      mybookIsbn: bookD.isbn,
      userId: user.userId
    }
    if (bookmark == false) {
      axios({
        url: 'http://3.34.123.84:8080/detail/scrap',
        method: 'POST',
        data: data,
        headers:{
          'Content-Type': 'application/json',
          // 'Accept': 'application/json; charset=utf-8',
        }
      }).then(res => {
        setBookmark(!bookmark);
        // console.log("북마크 한다", res.data)
      })
    }
    else {
      axios({
        url: `http://3.34.123.84:8080/detail/scrap/${bookIsbn}/${user.userId}`,
        method: 'DELETE',
        data: data,
        headers:{
          'Content-Type': 'application/json',
          // 'Accept': 'application/json; charset=utf-8',
        }
      }).then(res => {
        setBookmark(!bookmark);
        // console.log("북마크 취소", res.data)
      })
    }
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
    sendComment();
  }, []);

  // 한줄평 & pagination
  const [posts, setPosts] = useState([]);
  let [currentPosts, setCurrentPosts] = useState("");
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const fetchPosts = () => {
    axios({
      url: `http://3.34.123.84:8080/detail/reivew/${bookIsbn}`,
      method: 'GET',
    }).then(res => {
      // console.log('이거',res)
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
  currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 바꾸기
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // 한줄평 입력
  const sendComment = (comment) => {
    if (!comment) {
      return
    }
    
    let score = clicked.filter(Boolean).length;
    const data = {
      reviewComment: comment,
      reviewIsbn: bookD.isbn,
      reviewStar: score,
      userId: user.userId
    }
    // console.log(data);
  
    axios({
      url: 'http://3.34.123.84:8080/detail/review',
      method: 'POST',
      data: data,
      headers:{
        'Content-Type': 'application/json',
        // 'Accept': 'application/json; charset=utf-8',
      }
    }).then(res => {
      const nextData = {
        reviewComment: data.reviewComment,
        reviewDate: "2021-10-08T09:00:32.504Z",
        reviewStar: data.reviewStar,
        userName: user.userName
      }
      // console.log("최종", res.data)
      // console.log(posts)
      // posts.unshift(nextData)
      // console.log(posts)
      window.location.replace("/detail/" + bookIsbn)
    })
  }

  return (
    <div className="bookDetail">
      <div className="bookmarkIcon" onClick={handleBookmark}>
        {bookmark ? (<i className="fas fa-bookmark fa-4x bookmark-img"></i>)
          : (<i className="far fa-bookmark fa-4x bookmark-img"></i>)
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
        {loading ? <Loading /> : 
          <div className="booD-slider">
            <BookSlider slides={bookDump}/>
          </div>
        }
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
          <button className="bookD-btn" onClick={(e) => {
          sendComment(e.currentTarget.parentElement.childNodes[1].firstChild.value)
          }
        }>입력</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)