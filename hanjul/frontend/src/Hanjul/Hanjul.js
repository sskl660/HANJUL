import { useEffect } from 'react'
import './Hanjul.css'
import { login, logout, getUser } from '../redux'
import { connect } from 'react-redux';

const mapDispatchToProps = {
  login, logout, getUser
}

const mapStateToProps = ({users}) => {
  return {
    user: users
  }
}

function Hanjul() {
  useEffect(() => {
    let typingBool = false;
    let typingIdx = 0;
    let typing = document.querySelector(".hanjul-description");
    let typingTxt = typing.innerHTML;
    typingTxt = typingTxt.split("");

    const typingFunc = () => {
      if(typingIdx < typingTxt.length) {
        let titleTyping = document.querySelector(".hanjul-description-typing");
        if(titleTyping === null) {
          return
        }
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
    return () => {
        clearInterval(tyInt)
    }
  }, [])


  return (
    <div className="hanjul">
      <p className="hanjul-title">ㅎㅏㄴㅈㅜㄹ</p>
      <div className="hanjul-input">
        <input type="text" placeholder="당신의 한 줄" autoFocus/>
        <i className="fas fa-search"></i>
      </div>
      <h2 className="hanjul-description">당신의 인생을 한 줄로 표현한다면?"</h2>
      <h2 className="hanjul-description-typing">"</h2>
      <img src="image/hanjul.png" alt="image_for_css" className="hanjul-flower" />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Hanjul)