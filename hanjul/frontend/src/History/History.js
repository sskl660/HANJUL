// import { useEffect } from 'react'
import './History.css';
import HistoryList from './HistoryList';
import axios from 'axios'
import { URL, DJANGO_URL } from '../constants/global'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react'

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}

let history = [
  {
    sentence: '오늘은 곱창에 맥주를 먹어랏',
    books: [
      {
      title: '톨스토이1',
      img_url: 'http://image.aladin.co.kr/product/461/57/cover/s852532176_1.jpg',
      },
      {
      title: '톨스토이',
      img_url: 'http://image.aladin.co.kr/product/587/12/cover/8974112515_1.jpg',
      },
      {
      title: '톨스토이',
      img_url: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg',
      },
      {
      title: '톨스토이',
      img_url: 'https://bookthumb-phinf.pstatic.net/cover/061/861/06186150.jpg?type=m1&udate=20120410',
      },
      {
      title: '톨스토이',
      img_url: 'https://bookthumb-phinf.pstatic.net/cover/061/894/06189451.jpg?type=m1&udate=20170519',
      },
    ],
  },
  {
    sentence: '자소서 언제 다쓰지 잘 쓰는 법 좀 알려주세요',
    books: [
      {
      title: '톨스토이1',
      img_url: 'http://image.aladin.co.kr/product/461/57/cover/s852532176_1.jpg',
      },
      {
      title: '톨스토이',
      img_url: 'http://image.aladin.co.kr/product/587/12/cover/8974112515_1.jpg',
      },
      {
      title: '톨스토이',
      img_url: 'http://image.aladin.co.kr/product/461/58/cover/s812532176_1.jpg',
      },
      {
      title: '톨스토이',
      img_url: 'https://bookthumb-phinf.pstatic.net/cover/061/861/06186150.jpg?type=m1&udate=20120410',
      },
      {
      title: '톨스토이',
      img_url: 'https://bookthumb-phinf.pstatic.net/cover/061/894/06189451.jpg?type=m1&udate=20170519',
      },
    ],
  },
]

let historyList = history.map(h => {
  return (
    <HistoryList sentence={h.sentence} books={h.books} />
  )
})

function History({user}) {
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    axios({
      method: 'get',
      url: URL + 'history/' + user.userId
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <div className="history">
      {historyList}
    </div>
  )
}

export default connect(mapStateToProps)(History)