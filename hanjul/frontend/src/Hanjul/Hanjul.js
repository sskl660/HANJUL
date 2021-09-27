import { useEffect } from 'react'
import './Hanjul.css'

function Hanjul() {
  useEffect(() => {
    let typingBool = false;
    let typingIdx = 0;
    const typing = document.querySelector(".hanjul-description");
    let typingTxt = typing.innerHTML;
    typingTxt = typingTxt.split("");

    var typingFunc = () => {
      if(typingIdx < typingTxt.length) {
        const titleTyping = document.querySelector(".hanjul-description-typing");
        titleTyping.append(typingTxt[typingIdx]);
        typingIdx++;
      } else {
        clearInterval(tyInt)
      }
    }

    if(typingBool === false) {
      typingBool = true;
      var tyInt = setInterval(typingFunc, 150);
    }
  })


  return (
    <div className="hanjul">
      <p className="hanjul-title">ㅎㅏㄴㅈㅜㄹ</p>
      <div className="hanjul-input">
        <input type="text" placeholder="당신의 한 줄" autoFocus/>
        <i className="fas fa-search"></i>
      </div>
      <h2 className="hanjul-description">당신의 인생을 한 줄로 표현한다면?"</h2>
      <h2 className="hanjul-description-typing">"</h2>
      <img src="image/hanjul.png" alt="image_for_css" class="hanjul-flower" />
    </div>
  )
}

export default Hanjul