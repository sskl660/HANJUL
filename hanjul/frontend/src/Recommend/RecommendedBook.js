
function RecommendedBook(props) {
  // const book = props.book
  return (
    <div class="carousel__slider__item">
      <div class="item__3d-frame">
        <div class="item__3d-frame__box item__3d-frame__box--front">
          <img src={props.book.img_url} alt="" className="item-img" />
        </div>
        <div class="item__3d-frame__box item__3d-frame__box--left">
          <img src={props.book.img_url} alt="" className="book-side" />
        </div>
        <div class="item__3d-frame__box item__3d-frame__box--right"></div>
      </div>
    </div>
  )
}
export default RecommendedBook