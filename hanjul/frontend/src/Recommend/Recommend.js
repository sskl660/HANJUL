import './Recommend.css'
import { useEffect } from 'react';

function Recommend() {
  useEffect(() => {
    var carousel = document.getElementsByClassName('carousel')[0],
        slider = carousel.getElementsByClassName('carousel__slider')[0],
        items = carousel.getElementsByClassName('carousel__slider__item')
    
    var width, height, totalWidth, margin = 20,
        currIndex = 0
    
    function init() {
        resize();
        move(Math.floor(items.length / 2));
        bindEvents();
      
    }
    
    function resize() {
        width = Math.max(window.innerWidth * .25, 275)
        height = window.innerHeight * .5
        totalWidth = width * items.length;
      
        slider.style.width = totalWidth + "px";
      
        for(var i = 0; i < items.length; i++) {
            let item = items[i];
            item.style.width = (width - (margin * 2)) + "px";
            item.style.height = height + "px";
        }
    }
    
    function move(index) {
      
        if(index < 1) index = items.length;
        if(index > items.length) index = 1;
        currIndex = index;
      
        for(var i = 0; i < items.length; i++) {
            let item = items[i],
                box = item.getElementsByClassName('item__3d-frame')[0];
            if(i === (index - 1)) {
                item.classList.add('carousel__slider__item--active');
                box.style.transform = "perspective(1200px)"; 
            } else {
              item.classList.remove('carousel__slider__item--active');
                box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
            }
        }
      
        slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
    }
    
    function prev() {
      move(--currIndex);
    }
    
    function next() {
      move(++currIndex);    
    }
    
    
    function bindEvents() {
        window.onresize = resize;
        next()
        prev()
    }
  
    init();
    
  })
  return (
    <div>
      <p className="recommend-title">추천 책 페이지입니다</p>
      <div class="carousel">
        <div class="carousel__body">
          <div class="carousel__slider">
            <div class="carousel__slider__item">
              <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                  <h1>1</h1>
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
              </div>
            </div>
            <div class="carousel__slider__item">
              <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                  <h1>2</h1>
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
              </div>
            </div>
            <div class="carousel__slider__item">
              <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                  <h1>3</h1>
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
              </div>
            </div>
            <div class="carousel__slider__item">
              <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                  <h1>4</h1>
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
              </div>
            </div>
            <div class="carousel__slider__item">
              <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                  <h1>5</h1>
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommend