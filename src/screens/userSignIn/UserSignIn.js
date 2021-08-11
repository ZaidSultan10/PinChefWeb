import "./UserSignIn.css";

import { ReactComponent as Email } from "../../assets/svg/email-icon-big.svg";

import { useState } from "react";
import { Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { NavLink, useHistory } from "react-router-dom";

import { ReactComponent as Facebook } from "../../assets/svg/Sign-in-with Facebook-icon.svg";
import { ReactComponent as Google } from "../../assets/svg/Sign-in-with-Google-icon.svg";
import { ReactComponent as Apple } from "../../assets/svg/Sign-in -with-apple-icon.svg";
// import {}

const UserSignIn = () => {
  const [passwordType, setpasswordType] = useState("password");
  const [bgCng, setBgCng] = useState(true);

  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // emailSignInStart(email, password);
    console.log("I am hit");
    console.log(email);
    console.log(password);
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="userSignin">
      <div className="chef__button">
        <Button
          onClick={() => {
            history.push("/chef/signin");
          }}
        >
          I AM A CHEF <ChevronRightIcon className="right__icon" />{" "}
        </Button>
      </div>
      <div className="flex sign-in-up">
        <Email className="user__email" />
        <NavLink exact to='/usersignin' activeClassName='activesignup'
          className='signin-button' >SIGN IN</NavLink>
          <NavLink exact to='/user/signup' activeClassName='activesignup'
          className='sign-in-h2 signup-button' >SIGNUP</NavLink>
          
        
      </div>
      <div className="flex-column form">
        <div className="email-div">
          <label>
            <strong>Email ID</strong>
          </label>
          <input
            type="email"
            name="email"
            autoComplete="true"
            placeholder="ex: Johndoe@pinchif.io"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="password-div">
          <label>
            <strong>Password</strong>
          </label>
          <div className="password-div-pass flex">
            <input
              type={passwordType}
              name="password"
              autoComplete="true"
              placeholder="ex: PinChefisthebest!"
              value={password}
              onChange={handleChange}
            />
            <span
              className={`tooglePassword ${bgCng ? "show" : "hide"}`}
              onClick={() => {
                if (passwordType === "password") {
                  setpasswordType("text");
                  setBgCng(false);
                } else {
                  setpasswordType("password");
                  setBgCng(true);
                }
              }}
            ></span>
          </div>
        </div>
        <div className="keep-me-sign-in-and-submit">
          <div className="keep-me-sign-in">
            <input type="radio" name="keepMeSignIn" />
            <span>
              <strong>Keep me Signed in</strong>
            </span>
          </div>
          <button onClick={handleSubmit} className="continue">
            Continue
          </button>
        </div>
        <div className="sign-in-with-google-and-forget-password">
          <div className="sign-in-with-social-media">
            <Apple className="pd-1" />
            <Facebook className="pd-1 fb-blue" />
            <Google className="pd-1" />
          </div>
          <div
            onClick={() => history.push("/user/forgot-password")}
            className="forgot-password"
          >
            <p>FORGOT PASSWORD</p>
          </div>
        </div>
        <div className="Privicy-instructions">
          Signing in or Signing Up means you accept out{" "}
          <strong className="clickable">Terms/Conditions</strong> &{" "}
          <strong className="clickable">Privacy Policy.</strong>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
