import { Component } from "react";
import './components/User/User.css';


class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: 0,
    }
  }
  
  signIn = () => {
    if(this.state.flag === 0) {
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

      this.setWords();
      this.setState({
        flag: 1
      })
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

      this.setWordsRev();
      this.setState({
        flag: 0
      })

    }
  }

  setWords () {
    const title = document.querySelector(".title");
    // const light = document.querySelector(".light");
    // const login = document.querySelector(".login");
    const pButton = document.querySelector(".p-button");
    const bButton = document.querySelector(".b-button");
    // const forgot = document.querySelector(".forgot");
    const form = document.querySelector(".user-form");
    const move = document.querySelector(".move");
    // const signup = document.querySelector(".signup")

    title.innerText="가입하기";
    // light.innerText="Or use your email account";
    // login.style.display="none";
    pButton.innerText="로그인"
    bButton.innerText="회원가입"
    // signup.style.display = "block"
    // forgot.style.display="block";
    // 아래는 다시 확인...
    form.setAttribute("style","border-radius : 50px 0px 0px 50px");
    move.setAttribute("style","border-radius : 0px 50px 50px 0px");
  }

  setWordsRev () {
  const title = document.querySelector(".title");
  // const light = document.querySelector(".light");
  // const name = document.querySelector(".name");
  const pButton = document.querySelector(".p-button");
  const bButton = document.querySelector(".b-button");
  // const forgot = document.querySelector(".forgot");
  const form = document.querySelector(".user-form");
  const move = document.querySelector(".move");

  title.innerText="들어가기";
  // light.innerText="Or use your email for registration";
  // name.style.display="block";
  pButton.innerText="회원가입";
  bButton.innerText="로그인";
  // forgot.style.display="none";
  // 아래는 다시 확인...
  form.setAttribute("style","border-radius : 0px 50px 50px 0px");
  move.setAttribute("style","border-radius : 50px 0px 0px 50px");
  }



  render () {
    return (
      <div className="user-container">
        {/* sign in button */}
        <div className="move">
          <div className="p-button user-normal signin animated pulse" onClick={this.signIn}>회원가입</div>
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
          {/* <div className="user-icons">
            <div className="user-icon"><i className="fab fa-facebook-f"></i></div>
            <div className="user-icon"><i className="fab fa-github"></i></div>
            <div className="user-icon"><i className="fab fa-twitter"></i></div>
          </div> */}
          {/* <p className="normal light">Or use your email for registration</p> */}
          <input type="text" placeholder="아이디" className="normal login loginUserId"/>
          <br/>
          <input type="password" placeholder="비밀번호" className="normal login loginPassword"/>
          <br/>

          {/* 가입하기 */}
          <input type="text" placeholder="이름" className="normal signup name"/>
          <br/>
          <input type="password" placeholder="아이디" className="normal signup signupUserId"/>
          <br/>
          <input type="text" placeholder="비밀번호" className="normal signup signupPassword"/>
          <br/>
          <input type="password" placeholder="비밀번호 확인" className="normal signup signupPasswordRev"/>
          <br/>

          {/* sign up 움직여서 좌측이동한 후 */}
          {/* <p className="normal forgot">Forgot your password?</p> */}
          <button className="b-button normal">로그인</button>
        </div>
      </div>
    )
  }
}

export default User