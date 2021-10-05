import './Recommend.css'
import { useEffect, useState } from 'react';
import RecommendedBook from './RecommendedBook';
import { connect } from 'react-redux';
import { login, logout, getUser, getRecommend } from '../redux';
import axios from 'axios';
import { URL } from '../constants/global';

let historyList = [];

const getSentences = () => {
  axios({
    method: 'get',
    url: URL + 'history'
  })
  .then(res => {
    res.data.forEach((history, index) => {
      historyList.push(<li>{history}</li>)
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

function Recommend({ recommend }) {
  const [showHistories, setShowHistories] = useState([]);

  useEffect(() => {
    getSentences();
    const setSentences = () => {
      h1 < 9 ? h1++ : h1 = 0; 
      h2 < 9 ? h2++ : h2 = 0;
      h3 < 9 ? h3++ : h3 = 0;
      h4 < 9 ? h4++ : h4 = 0;
      h5 < 9 ? h5++ : h5 = 0;
      setShowHistories([historyList[h1], historyList[h2], historyList[h3], historyList[h4], historyList[h5]])
      console.log(h1, h5)
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
      <RecommendedBook />
      <ul className="recommend-history">
        {showHistories}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(Recommend)