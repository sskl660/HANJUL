import { Component } from "react";
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
          <button className="nav-button"></button>
        </div>
        <div className="side-back" onClick={sideClose}>
        </div>
      </div>
    )
  }
}
export default Navbar