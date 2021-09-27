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
      const form = document.querySelector(".form");
      const hello = document.querySelector(".hello");
      const welcome = document.querySelector(".welcome");


      move.classList.add("moving");
      move.classList.remove("start");
      form.classList.add("movingForm");
      form.classList.remove("startForm");
      hello.style.display ="block";
      welcome.style.display="none";

      move.style.backgroundPosition = "right";

      setTimeout(this.setWords, 200)


    }
  }

  setWords () {
    const title = document.querySelector(".title");
    const light = document.querySelector(".light");
    const name = document.querySelector(".name");
    const pButton = document.querySelector(".p-button");
    const bButton = document.querySelector(".b-button");
    const forgot = document.querySelector(".forgot");
    const form = document.querySelector(".form");
    const move = document.querySelector(".move");

    title.innerText="Sign-in in to Pixmy";
    light.innerText="Or use your email account";

  }



  render () {
    return (
      <div class="container">
        <div class="move">
          <div class="p-button normal signin animated pulse" onClick={this.signIn}>SIGN IN</div>
        </div>
        <div class="welcome">
          <h4 class="bold welcome-text">Welcome Back!</h4>
          <p class="normal text">To keep connected with us please login with your personal info</p>
        </div>
        <div class="hello">
          <h4 class="bold welcome-text">Hello Friend</h4>
          <p class="normal text">Enter your personal details and start journey with us</p>
        </div>
        <div class="form">
          <h4 class="bold title">Create Account</h4>
          <div class="icons">
            <div class="icon"><i class="fab fa-facebook-f"></i></div>
            <div class="icon"><i class="fab fa-github"></i></div>
            <div class="icon"><i class="fab fa-twitter"></i></div>
          </div>
          <p class="normal light">Or use your email for registration</p>
          <input type="text" placeholder="Name" class="normal name"/>
          <input type="text" placeholder="Email" class="normal"/>
          <br/>
          <input type="password" placeholder="Password" class="normal"/><br/>
          <p class="normal forgot">Forgot your password?</p>
          <button class="b-button normal">SIGN UP</button>
        </div>
      </div>
    )
  }
}

export default User