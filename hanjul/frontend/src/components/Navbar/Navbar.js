import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { login, logout, getUser } from '../../redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const mapDispatchToProps = {
  login, logout, getUser
}

const mapStateToProps = ({users}) => {
  return {
    user: users.user
  }
}


function Navbar (props){
  const[open, setOpen] = useState("")
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false,
  //   }
  // }
  useEffect(()=> {
    checkUser()
  })
  const history = useHistory();
  const checkUser = () => {
    const loginbutton = document.querySelector(".up-user-button")
    const logoutbutton = document.querySelector(".up-logout-button")
    const myLibrarybutton = document.querySelector(".up-mylibrary-button")
    const tracesbutton = document.querySelector(".up-traces-button")
    // 로그인 한상태
    if (props.user.userName != '') {
      loginbutton.style.display = "none";
      logoutbutton.style.display = "block";
    } else {
      loginbutton.style.display = "block";
      logoutbutton.style.display = "none";
      myLibrarybutton.style.backgroundColor = "#3B2828";
      tracesbutton.style.backgroundColor = "#3B2828";


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
  console.log(history.location.pathname)
  return (
    <div className="side">
      <div className="side-bar" onClick={!props.open ? sideClick:''}>
        {/* <div>{props.user.userId}</div> */}
        <div className="side-bar-list">
          <div>
            <Link to="/" exact>
              <button className="up-mylibrary-button">ㅎㅏㄴㅈㅜㄹ</button>
            </Link>
          </div>
          <img className="nav-hanjul-img" src="../../image/nav-flower-left.png" alt="" />
          <div>
            <Link to="/mylibrary">
              <button className="up-mylibrary-button">나의 서재</button>
            </Link>
          </div>
          <img className="nav-mylibrary-img" src="../../image/nav-flower-right.png" alt="" />
          <div>
            <Link to="/history">
              <button className="up-traces-button">발자취</button>
            </Link>
          </div>
          <img className="nav-traces-img" src="../../image/nav-flower-left.png" alt="" />
          <div>
            <Link to="/user">
              <button className="up-user-button">들어가기</button>
            </Link>
          </div>
          <div>
              <button className="up-logout-button">나가기</button>
          </div>

          <img className="nav-user-img" src="../../image/nav-flower-right.png" alt="" />
        </div>

        <button className="nav-button"></button>
        
      </div>
      <div className="side-back" onClick={sideClose}>
      </div>
    </div>
  )


}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)