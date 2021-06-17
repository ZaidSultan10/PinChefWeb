import "./UserSignIn.css";

import { ReactComponent as Email } from "../../assets/svg/email-icon-big.svg";

import { useState } from "react";

import yellowArrow from "../../assets/svg/Yellow-right-arrow.svg";

import { ReactComponent as Facebook } from "../../assets/svg/Sign-in-with Facebook-icon.svg";
import { ReactComponent as Google } from "../../assets/svg/Sign-in-with-Google-icon.svg";
import { ReactComponent as Apple } from "../../assets/svg/Sign-in -with-apple-icon.svg";

const UserSignIn = () => {
  const [passwordType, setpasswordType] = useState("password");
  const [bgCng, setBgCng] = useState(true);
  return (
    <div className="userSignin">
      <div className="i-am-a-chef-div">
        <button className="i-am-a-chef">
          I AM A CHEF{" "}
          <img className="yellow-arrow" src={yellowArrow} alt="arrow" />
        </button>
      </div>
      <div className="flex sign-in-up">
        <Email />
        <h2>SIGN IN</h2>
        <h2>SIGN UP</h2>
      </div>
      <div className="flex-column form">
        <div className="email-div">
          <label>
            <strong>Email ID</strong>
          </label>
          <input
            type="text"
            autoComplete="true"
            placeholder="ex: Johndoe@pinchif.io"
          />
        </div>
        <div className="password-div">
          <label>
            <strong>Password</strong>
          </label>
          <div className="password-div-pass flex">
            <input
              type={passwordType}
              autoComplete="true"
              placeholder="ex: PinChefisthebest!"
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
          <button className="continue">Continue</button>
        </div>
        <div className="sign-in-with-google-and-forget-password">
          <div className="sign-in-with-social-media">
            <Apple className="pd-1" />
            <Facebook className="pd-1 fb-blue" />
            <Google className="pd-1" />
          </div>
          <div className="forgot-password">
            <strong>FORGOT PASSWORD</strong>
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
