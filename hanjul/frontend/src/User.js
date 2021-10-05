import { useState } from "react";
import './components/User/User.css';
import Modal from './components/Common/Modal';
import { connect } from 'react-redux';
import { login, logout, getUser } from './redux'
import axios from "axios";
import configStore from "./redux/store";
import { useHistory } from 'react-router-dom';

const { store } = configStore();
// import {useDispatch, useSelector} from 'react-redux';

const mapDispatchToProps = {
  login, logout, getUser
};

const mapStateToProps = ({users}) => {
  return {
    user: users
  }
}


function User (props) {
  const[flag, setFlag] = useState(0)
  const[Id, setId] = useState("")
  const[Pw, setPw] = useState("")
  const[Sname, setSname] = useState("")
  const[Sid, setSid] = useState("")
  const[Spw, setSpw] = useState("")
  const[Spwrev, setSpwrev] = useState("")
  const history = useHistory()

  const sName = (e) => {
    setSname(e.target.value)
  }

  const sId = (e) => {
    setSid(e.target.value)
  }

  const sPw = (e) => {
    setSpw(e.target.value)
  }

  const sPwRev = (e) => {
    const sPwInput = document.querySelector(".passwordError")
    if (e.target.value !== Spw) {
      sPwInput.style.display="inline-block"
      sPwInput.innerText = "비밀번호가 틀립니다."
    } else {
      sPwInput.innerText = "비밀번호와 일치합니다."
      setSpwrev(e.target.value)
    }
  }

  const onSignup = () => {
    const data = {
      userId: Sid,
      userName: Sname,
      userPw: Spw
    }

    if (data.userId !== "" && data.userName !== "" && data.userPw !== "" && data.userPw === Spwrev) {
      axios({
        url: 'http://3.34.123.84:8080/signup',
        method: 'POST',
        data: data,
        headers:{
          'Content-Type': 'application/json',
        }
      }).then(res => {
        const modal = document.querySelector('.modal');
        const content = document.querySelector('.modal_content');
        modal.style.display = "block";
        content.innerText = "회원가입에 성공하셨습니다."
        window.location.replace("/user")
      }).catch(()=>{
        const modal = document.querySelector('.modal');
        const content = document.querySelector('.modal_content');
        modal.style.display = "block";
        content.innerText = "회원가입에 실패했습니다."
        // window.location.replace("/user")
      })
    } else {
      const modal = document.querySelector('.modal');
      const content = document.querySelector('.modal_content');
      modal.style.display = "block";
      content.innerText = "입력정보를 확인해주세요."
      // window.location.replace("/user")
    }
    
  }


  const onId = (e) => {
    setId(e.target.value)
  }

  const onPw = (e) => {
    setPw(e.target.value)
  }

  const onlogin = (e) =>{
    const data = {
      userId : Id,
      userPw : Pw
    }
    console.log(Id)
    console.log(Pw)
    if (Id !== '' && Pw !== '') {
      axios({
        url: 'http://3.34.123.84:8080/login', 
        method: 'POST',
        data: data,
        headers:{
          'Content-Type': 'application/json',
        }
      }).then(res => {  
          store.dispatch(props.login(res.data))
          history.push('/')
        })
    } else {
      const modal = document.querySelector('.modal');
      const content = document.querySelector('.modal_content');
      modal.style.display = "block";
      content.innerText = "입력정보를 확인해주세요."
    }
  }
  
  const signIn = () => {
    if(flag === 0) {
      const move = document.querySelector(".move");
      const form = document.querySelector(".user-form");
      const hello = document.querySelector(".hello");
      const welcome = document.querySelector(".user-welcome");

      const loginUserId = document.querySelector(".loginUserId")
      const loginPassword = document.querySelector(".loginPassword")
      const name = document.querySelector(".name")
      const signupUserId = document.querySelector(".signupUserId")
      const signupPassword = document.querySelector(".signupPassword")
      const signupPasswordRev = document.querySelector(".signupPasswordRev")

      move.classList.add("moving");
      move.classList.remove("start");
      form.classList.add("movingForm");
      form.classList.remove("startForm");
      hello.style.display ="block";
      welcome.style.display="none";
      move.style.backgroundPosition = "right";

      // 로그인 인풋 없어짐
      loginUserId.style.display ="none";
      loginPassword.style.display = "none"

      // 회원가입 인풋 나타남
      name.style.display="block"
      signupUserId.style.display="block"
      signupPassword.style.display="block"
      signupPasswordRev.style.display="block"

      setWords();
      setFlag(1)
    } else {
      const move = document.querySelector(".move");
      const form = document.querySelector(".user-form");
      const hello = document.querySelector(".hello");
      const welcome = document.querySelector(".user-welcome");

      const loginUserId = document.querySelector(".loginUserId")
      const loginPassword = document.querySelector(".loginPassword")
      const name = document.querySelector(".name")
      const signupUserId = document.querySelector(".signupUserId")
      const signupPassword = document.querySelector(".signupPassword")
      const signupPasswordRev = document.querySelector(".signupPasswordRev")
      
    

      move.classList.remove("moving");
      move.classList.add("start");
      form.classList.remove("movingForm");
      form.classList.add("startForm");
      hello.style.display ="none";
      welcome.style.display="block";
      move.style.backgroundPosition = "left";

      // 로그인 인풋 나타남
      loginUserId.style.display ="block";
      loginPassword.style.display = "block"

      // 회원가입 인풋 나타남
      name.style.display="none"
      signupUserId.style.display="none"
      signupPassword.style.display="none"
      signupPasswordRev.style.display="none"

      setWordsRev();
      setFlag(0)

    }
  }

  const setWords = () => {
    const title = document.querySelector(".title");
    const pButton = document.querySelector(".p-button");
    const lButton = document.querySelector(".lbutton");
    const sButton = document.querySelector(".sbutton");
    const form = document.querySelector(".user-form");
    const move = document.querySelector(".move");

    title.innerText="가입하기";
    lButton.style.display = "none"
    sButton.style.display = "block"
    pButton.innerText="로그인"
    // 아래는 다시 확인...
    form.setAttribute("style","border-radius : 50px 0px 0px 50px");
    move.setAttribute("style","border-radius : 0px 50px 50px 0px");
  }

  const setWordsRev = () =>  {
    const title = document.querySelector(".title");
    const pButton = document.querySelector(".p-button");
    const lButton = document.querySelector(".lbutton");
    const sButton = document.querySelector(".sbutton");
    const form = document.querySelector(".user-form");
    const move = document.querySelector(".move");

    title.innerText="들어가기";
    lButton.style.display = "block"
    sButton.style.display = "none"
    pButton.innerText="회원가입";

    // 아래는 다시 확인...
    form.setAttribute("style","border-radius : 0px 50px 50px 0px");
    move.setAttribute("style","border-radius : 50px 0px 0px 50px");
  }

  return (
    <div>
      <div>{props.user.userName}</div>
      <div>{props.user.userId}</div>
      <div className="user-container">
        {/* sign in button */}
        <div className="move">
          <div className="p-button user-normal signin animated pulse" onClick={signIn}>회원가입</div>
        </div>
        {/* sign in 상단 내용 */}
        <div className="user-welcome">
          <h4 className="bold user-welcome-text">ㅎㅏㄴㅈㅜㄹ</h4>
          <p className="normal user-text">한 줄에 오신 여러분 환영합니다.</p>
          <p className="normal user-text">당신의 한 줄을 입력하여 맞춤 책을 만나보세요.</p>
          <p className="normal user-text-two">아직 아이디가 없으신가요?</p>
        </div>
        {/* sign in 움직이고 난후 우측 상단 내용 */}
        <div className="hello">
          <h4 className="bold user-welcome-text-move">ㅎㅏㄴㅈㅜㄹ</h4>
          <p className="normal user-text-move">한 줄에 오신 여러분 환영합니다.</p>
          <p className="normal user-text-move">당신의 한 줄을 입력하여 맞춤 책을 만나보세요.</p>
          <p className="normal user-text-two-move">이미 회원이신가요?</p>       
        </div>

        {/* sign up form */}
        <div className="user-form">
          {/* sign up 상단 내용 */}
          <div className="user-bold title">들어가기</div>
          <input type="text" placeholder="아이디" className="normal login loginUserId" value={Id} onChange={onId}/>
          <br/>
          <input type="password" placeholder="비밀번호" className="normal login loginPassword" value={Pw} onChange={onPw}/>
          <br/>

          {/* 가입하기 */}
          <input type="text" placeholder="이름" className="normal signup name" onChange={sName}/>
          <br/>
          <input type="text" placeholder="아이디" className="normal signup signupUserId" onChange={sId}/>
          <br/>
          <input type="password" placeholder="비밀번호" className="normal signup signupPassword"onChange={sPw}/>
          <br/>
          <input type="password" placeholder="비밀번호 확인" className="normal signup signupPasswordRev" onChange={sPwRev}/>
          <br/>
          <div className="passwordError">비밀번호가 틀립니다.</div>

          {/* sign up 움직여서 좌측이동한 후 */}
          <button className="lbutton normal" onClick={onlogin}>로그인</button>
          <button className="sbutton normal" onClick={onSignup}>회원가입</button>
        </div>  
      </div>
      <Modal msg={"로그인에 성공하셨습니다!"}/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(User)