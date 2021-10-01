import React from 'react';
import './BookSlider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const BookSlider = (props) => {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  }
    return (
      <div className="bookD-books-slider">
        <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
        <div id="slider">
          {
            props.slides.map((slide, index) => {
              return (
                <div className="slider-book" key={index}>
                  {/* <div className="slider-book-image" style={{backgroundImage:`url(${slide.image})`, backgroundSize:'cover'}} /> */}
                  <img className="slider-book-image" src={slide.imgUrl} alt="" />
                </div>
              )
            })
          }
        </div>
        <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
      </div>
    )
}

export default BookSlider;