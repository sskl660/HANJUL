import React from 'react';
import './BookSlider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BookSlider = (props) => {
  // console.log(props)

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  const goBook= (isbn) => {
    // console.log('되나',isbn)
    window.location.replace("/detail/" + isbn)
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
                  <img className="slider-book-image" src={slide.img_url} alt="" onClick={() => goBook(slide.isbn)}/>
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