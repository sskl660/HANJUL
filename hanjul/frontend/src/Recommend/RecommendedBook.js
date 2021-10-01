import { useHistory } from 'react-router';

function RecommendedBook(props) {
  // const book = props.book
  const history = useHistory();
  return (
    <div className="carousel__slider__item" onClick={e => console.log(e.target)}>
      <div className="item__3d-frame">
        <div className="item__3d-frame__box item__3d-frame__box--front">
          <img src={props.book.img_url} alt="" className="item-img" />
        </div>
        <div className="item__3d-frame__box item__3d-frame__box--left">
          <img src={props.book.img_url} alt="" className="book-side" />
        </div>
        <div className="item__3d-frame__box item__3d-frame__box--right"></div>
      </div>
    </div>
  )
}
export default RecommendedBook