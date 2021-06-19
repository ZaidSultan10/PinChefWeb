import "./UserSignIn.css";

import { ReactComponent as Email } from "../../assets/svg/email-icon-big.svg";

import { useState } from "react";
import { Button } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { RadioButtonChecked, RadioButtonCheckedOutlined, RadioButtonUnchecked } from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from "react-router-dom";

const UserSignIn = () => {
  const [passwordType, setpasswordType] = useState("password");
  const [bgCng, setBgCng] = useState(true);

  let history = useHistory()

  return (
    <div className="userSignin">
      <div className='chef__button'>
          <Button>I AM A CHEF <ChevronRightIcon className='right__icon' /> </Button>
      </div>
      <div className="flex sign-in-up">
        <Email className='user__email' />
        <h2 className='active2'>SIGN IN</h2>
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
      </div>
      <div className='signIn__confirm'>
            <div className='keep__signed'>
               <RadioButtonUnchecked className='radio' />
               <p>Keep me signed in</p>
            </div>
            <div className='continue__button'>
                <Button onClick={() => {
                  history.push('/homepage')
                }}>Continue</Button>
            </div>
      </div>
      <div className='signin__options'>
        <div className='signin__icons'>
            <FacebookIcon className='facebook' />
        </div>
        <div className='forgot__password'>
              <p>FORGOT PASSWORD</p>
        </div>
      </div>
      <div className='terms__conditions'>
            <p>Signing in or Signing Up means you accept
              our <a href='#'>Terms/Conditions</a> and <a href='#'>Privacy Policy</a>
            </p>
      </div>
    </div>
  );
};

export default UserSignIn;
