import { useEffect, useState } from 'react'
import './Hanjul.css'
import { setRecommend } from '../redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { URL, DJANGO_URL } from '../constants/global'
import { useHistory } from 'react-router';
import configStore from "../redux/store";
import Loading from '../Loading'

const { store } = configStore();

const mapDispatchToProps = {
  setRecommend
}

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}

const copywrite = [
  '지금의 기분을 한 줄로 표현한다면?"',
  '당신의 인생을 한 줄로 표현한다면?"',
  '원하시는 한 줄을 검색해보세요."',
  '당신에게 맞는 책을 추천해 드릴게요."',
]

const num = Math.floor(Math.random() * 4);


function Hanjul(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let typingBool = false;
    let typingIdx = 0;
    let typing = document.querySelector(".hanjul-description");
    let typingTxt = typing.innerHTML;
    typingTxt = typingTxt.split("");

    const typingFunc = () => {
      if(typingIdx < typingTxt.length) {
        let titleTyping = document.querySelector(".hanjul-description-typing");
        if(titleTyping === null) {
          return
        }
        titleTyping.append(typingTxt[typingIdx]);
        typingIdx++;
      } else {
        clearInterval(tyInt)
      }
    }

    if(typingBool === false) {
      typingBool = true;
      var tyInt = setInterval(typingFunc, 150);
    }
    return () => {
      clearInterval(tyInt)
    }
  }, [])
  let record = {
    historyBooksImgurl: [

    ],
    historyBooksIsbns: [

    ],
    historyOneline: "",
    userId: props.user.userId,
  }

  async function putHanjul(hanjul) {
    if (!hanjul || loading) {
      return
    }
    setLoading(true);
    record.historyOneline = hanjul

    await axios({
      method: 'post',
      url: DJANGO_URL + 'hanjul/line/',
      data: {
        "line": hanjul
      },
      headers:{
        // 'Content-Type': 'application/json',
        'Accept': 'application/json; charset=utf-8',
      }
    })
    .then(res => {
      res.data.map((d) => {
        record.historyBooksImgurl.push(d.img_url)
        record.historyBooksIsbns.push(d.isbn)
      })
      return res
    })
    .then(res => {
      const data = {
        hanjul,
        books: res.data
      }
      store.dispatch(props.setRecommend(data))
      setLoading(true)
      return res
    })
    .catch(err => {
      console.log(err)
      return err
    })

    await axios({
      method: 'post',
      url: URL + 'history/record',
      data: record,
      // 'Content-Type': 'application/json',
    })
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
      return err
    })
    history.push('/recommend', [])
  }

  return (
    <div class="hanjul-container">
    {loading ? <Loading /> : 
    <div className="hanjul">
      <p className="hanjul-title">ㅎㅏㄴㅈㅜㄹ</p>
      <div className="hanjul-input">
        <input 
        type="text" 
        placeholder="당신의 한 줄" 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            putHanjul(e.target.value)
          }
        }}
        autoFocus />
        <i 
          className="fas fa-search" 
          onClick={(e) => {
            putHanjul(e.currentTarget.parentElement.firstChild.value)
          }}
        ></i>
      </div>
      <h2 className="hanjul-description-typing">"</h2>
      {/* <h2 className="hanjul-description">당신의 인생을 한 줄로 표현한다면?"</h2> */}
      <h2 className="hanjul-description">{copywrite[num]}</h2>
      <img src="image/hanjul.png" alt="image_for_css" className="hanjul-flower" />
      </div>
    }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Hanjul)