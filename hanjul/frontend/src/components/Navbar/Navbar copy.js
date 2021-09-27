import { Component } from "react";
import './Navbar.css'

class Navbar extends Component {

  sideClick () {
    const sidebar = document.querySelector(".side-bar");
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active')
    } else { 
      sidebar.classList.add('active')
    }
  }

  render(){
    return (
      <div>
        <div className="side-bar" onClick={this.sideClick}>
          <button className="nav-button"></button>
        </div>
        <div>
        </div>
        
      </div>
    )
  }
}

export default Navbar