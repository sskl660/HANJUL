import { Component } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render(){
    const sideClick = () => {
      const sidebar = document.querySelector(".side-bar");
      const sideback = document.querySelector(".side-back");
      sidebar.addEventListener("click", sidebar.classList.add('active'))
      sideback.addEventListener("click", sideback.classList.add('active'))
      this.setState({open: true})
    }

    const sideClose = () => {
      const sidebar = document.querySelector(".side-bar");
      const sideback = document.querySelector(".side-back");
      sidebar.addEventListener("click", sidebar.classList.remove('active'))
      sideback.addEventListener("click", sideback.classList.remove('active'))
      this.setState({open: false})
    }

    return (
      <div className="side">
        <div className="side-bar" onClick={!this.state.open ? sideClick:''}>
          
          <div className="side-bar-list">
            <div>
              <Link to="/" exact>
                <button className="up-hanjul-button">ㅎㅏㄴㅈㅜㄹ</button>
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
              <Link to="/traces">
                <button className="up-traces-button">발자취</button>
              </Link>
            </div>
            <img className="nav-traces-img" src="../../image/nav-flower-left.png" alt="" />
            <div>
              <Link to="/user">
                <button className="up-user-button">들어가기</button>
              </Link>
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
}
export default Navbar