import './HistoryList.css';
// import { useEffect } from 'react'

function HistoryList (props) {
  let bookList = props.books.map(book => {
    return (
      <img className="history-book-image" src={book.img_url} alt="book" />
    )
  })

  return (
    <div className="history-box">
      <div class="sect01">
        <div class="line-box">
          <span class="line-01"></span>
          <span class="line-02"></span>
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
      <div className="history-date">2021.09.01</div>
    </div>
  )
}

export default HistoryList