// import { useEffect } from 'react'
import './History.css';
import HistoryList from './HistoryList';
import axios from 'axios'
import { URL } from '../constants/global'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react'

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}

function History({user}) {
  const [history, setHistory] = useState([]);
  const [historyList, setHistoryList] = useState([])
  
  useEffect(async () => {
    await axios({
      method: 'get',
      url: URL + 'history/' + user.userId
    })
    .then(res => {
      setHistory(res.data)
      return res
    })
    .catch(err => {
      console.log(err)
    })

    if (historyList.length < history.length) {
      history.forEach(h => {
        historyList.push(
          <HistoryList 
            key={h.historyOneline} 
            sentence={h.historyOneline} 
            bookImgs={h.historyBooksImgurl} 
            bookIsbns={h.histroyBooksIsbns} 
            date={h.historyDate}
            historyId={h.historyId}
            key={h.historyId}
            />
        )
      });
    }

  }, [history])

  return (
    <div className="history">
      {historyList}
    </div>
  )
}

export default connect(mapStateToProps)(History)