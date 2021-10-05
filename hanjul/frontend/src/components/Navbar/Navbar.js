import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { login, logout, getUser } from '../../redux';
import configStore from "../../redux/store";
import { connect } from 'react-redux';
import Modal from '../Common/Modal';

const { store } = configStore();

const mapDispatchToProps = {
  login, logout, getUser
}

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}

function Navbar (props){
  const[open, setOpen] = useState("") // eslint-disable-line no-unused-vars

  
  useEffect(()=> {
    checkUser()
  })

  const realLogout = () => {
    const data = {
      userName: '',
      userId: '',
      userPw: ''
    }
    store.dispatch(props.login(data))
  }
  const logout = () => {
    const modal = document.querySelector('.modal');
    const content = document.querySelector('.modal_content');
    const yes = document.querySelector('.yes')
    const no = document.querySelector('.no')
    modal.style.display = "block";
    content.innerText = "로그아웃 하시겠습니까?";
    yes.style.display = "block";
    no.style.display = "block";
    yes.addEventListener("click", realLogout)
  }

  const requestLogin = () => {
    const modal = document.querySelector('.modal');
    const content = document.querySelector('.modal_content');
    const yes = document.querySelector('.yes')
    const no = document.querySelector('.no')
    modal.style.display = "block";
    content.innerText = "로그인 후에 사용가능합니다."
    yes.style.display = "none";
    no.style.display = "none";
    // window.location.replace("/user")
  }
  
  const checkUser = () => {
    const loginbutton = document.querySelector(".up-user-button")
    const logoutbutton = document.querySelector(".up-logout-button")
    const myLibrarybutton = document.querySelector(".up-mylibrary-button")
    const tracesbutton = document.querySelector(".up-traces-button")
    const myLibrarybuttonOff = document.querySelector(".up-mylibrary-button-off")
    const tracesbuttonOff = document.querySelector(".up-traces-button-off")
    // 로그인 한상태
    if (props.user.userName !== '') {
      loginbutton.style.display = "none";
      logoutbutton.style.display = "block";
      myLibrarybutton.style.display = "block";
      myLibrarybuttonOff.style.display="none";
      tracesbutton.style.display="block";
      tracesbuttonOff.style.display="none"
      
    } else {
      loginbutton.style.display = "block";
      logoutbutton.style.display = "none";
      myLibrarybutton.style.display = "none";
      myLibrarybuttonOff.style.display="block";
      tracesbutton.style.display="none";
      tracesbuttonOff.style.display="block"

    }

  }
  

 
  const sideClick = () => {
    const sidebar = document.querySelector(".side-bar");
    const sideback = document.querySelector(".side-back");
    sidebar.addEventListener("click", sidebar.classList.add('active'))
    sideback.addEventListener("click", sideback.classList.add('active'))
    setOpen(true)
  }

  const sideClose = () => {
    const sidebar = document.querySelector(".side-bar");
    const sideback = document.querySelector(".side-back");
    sidebar.addEventListener("click", sidebar.classList.remove('active'))
    sideback.addEventListener("click", sideback.classList.remove('active'))
    setOpen(false)
  }
  console.log(props.user.userName)
  
  return (
    <div className="side">
      <div className="side-bar" onClick={!props.open ? sideClick:''}>
        <div className="side-bar-list">
          <div>
            <Link to="/">
              <button className="up-hanjul-button">ㅎㅏㄴㅈㅜㄹ</button>
            </Link>
          </div>
          <img className="nav-hanjul-img" src="../../image/nav-flower-left.png" alt="" />

          <div>
            <Link to="/mylibrary">
              <button className="up-mylibrary-button">나의 서재</button>
            </Link>
          </div>
          <div>
              <button className="up-mylibrary-button-off" onClick={requestLogin}><i className="fas fa-lock fa-sm"></i>나의 서재</button>
          </div>
          <img className="nav-mylibrary-img" src="../../image/nav-flower-right.png" alt="" />

          <div>
            <Link to="/history">
              <button className="up-traces-button">발자취</button>
            </Link>
          </div>
          <div>
              <button className="up-traces-button-off" onClick={requestLogin}><i className="fas fa-lock fa-sm"></i>발자취</button>
          </div>
          <img className="nav-traces-img" src="../../image/nav-flower-left.png" alt="" />


          <div>
            <Link to="/user">
              <button className="up-user-button">들어가기</button>
            </Link>
          </div>
          <div>
              <button className="up-logout-button" onClick={logout}>나가기</button>
          </div>
          <img className="nav-user-img" src="../../image/nav-flower-right.png" alt="" />
        </div>
        <button className="nav-button"></button>
      </div>
      <div className="side-back" onClick={sideClose}>
      </div>
      <Modal msg={"로그인에 성공하셨습니다!"}/>
    </div>
  )


}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)