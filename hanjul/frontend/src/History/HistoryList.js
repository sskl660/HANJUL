import './HistoryList.css';
import { useState } from 'react'
import configStore from "../redux/store";
import { connect } from 'react-redux';
import { setRecommend } from '../redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import { URL } from '../constants/global'

const { store } = configStore();

const mapDispatchToProps = {
  setRecommend
}

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}

function HistoryList (props) {
  const [bookList, setBookList] = useState([]);
  const history = useHistory();
  if (bookList.length < 5) {
    props.bookImgs.forEach(book => {
      bookList.push(
        <img className="history-book-image" src={book} alt="bookImage" />
      )
    })
  }
  const date = props.date.substring(10, 0)

  async function goRecommend() {
    const data = {
      hanjul: props.sentence,
      books: [
        {
          img_url: props.bookImgs[0],
          isbn: props.bookIsbns[0]
        },
        {
          img_url: props.bookImgs[1],
          isbn: props.bookIsbns[1]
        },
        {
          img_url: props.bookImgs[2],
          isbn: props.bookIsbns[2]
        },
        {
          img_url: props.bookImgs[3],
          isbn: props.bookIsbns[3]
        },
        {
          img_url: props.bookImgs[4],
          isbn: props.bookIsbns[4]
        },
    ]
    }
    await store.dispatch(props.setRecommend(data))
    history.push('/recommend', [])
  }
  async function removeHistory(e) {
    e.stopPropagation();
    await axios({
      method: 'delete',
      url: URL + `history/${props.historyId}`
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    window.location.reload();
  }

  return (
    <div className="history-box" onClick={() => goRecommend()}>
      <div className="sect01" onClick={(e) => removeHistory(e)}>
        <div className="line-box">
          <span className="line-01"></span>
          <span className="line-02"></span>
        </div>
      </div>
      <div className="history-sentence-box">
        <span className="history-sentence">
          <span>"</span>
          <span>{props.sentence}</span>
          <span>"</span>
        </span>
      </div>
      <div className="history-book-list">{bookList}</div>
      <div className="history-date">{date}</div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryList);