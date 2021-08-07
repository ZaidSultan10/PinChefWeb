import "./UserSignIn.css";

import { ReactComponent as Email } from "../../assets/svg/email-icon-big.svg";

import { useState } from "react";
import { Button } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from "react-router-dom";

import { ReactComponent as Facebook } from "../../assets/svg/Sign-in-with Facebook-icon.svg";
import { ReactComponent as Google } from "../../assets/svg/Sign-in-with-Google-icon.svg";
import { ReactComponent as Apple } from "../../assets/svg/Sign-in -with-apple-icon.svg";

const UserSignIn = () => {
  const [passwordType, setpasswordType] = useState("password");
  const [bgCng, setBgCng] = useState(true);

  let history = useHistory()

  return (
    <div className="userSignin">
      <div className='chef__button'>
          <Button onClick={ () =>{
                    history.push('/chef/signin')
                }
            }>I AM A CHEF <ChevronRightIcon className='right__icon' /> </Button>
      </div>
      <div className="flex sign-in-up">
        <Email className='user__email' />
        <h2 className='activesignin sign-in-h2 b'>SIGN IN</h2>
        <h2 className='sign-in-h2'
        onClick={() =>{
          history.push('/user/signup')
      }}>SIGN UP</h2>
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
          <button onClick={ () =>{
                    history.push('/homepage')
                }
            } className="continue"
          >Continue</button>
        </div>
        <div className="sign-in-with-google-and-forget-password">
          <div className="sign-in-with-social-media">
            <Apple className="pd-1" />
            <Facebook className="pd-1 fb-blue" />
            <Google className="pd-1" />
          </div>
          <div onClick={
              () => history.push('/user/forgot-password')
          } className="forgot-password">
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
