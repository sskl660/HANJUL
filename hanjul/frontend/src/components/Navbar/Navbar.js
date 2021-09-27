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
          <div>
            <Link to="/" exact>
              <button>ㅎㅏㄴㅈㅜㄹ</button>
            </Link>
          </div>
          <div>
            <Link to="/mylibrary">
              <button>나의 서재</button>
            </Link>
          </div>
          <div>
            <Link to="/traces">
              <button>발자취</button>
            </Link>
          </div>
          <div>
            <Link to="/user">
              <button>login</button>
            </Link>
          </div>
         
          <button className="nav-button" onclick={sideClick}></button>
        </div>
        <div className="side-back" onClick={sideClose}>
        </div>
      </div>
    )
  }
}
export default Navbar