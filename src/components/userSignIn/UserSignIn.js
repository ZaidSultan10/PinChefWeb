import "./UserSignIn.css";

import { ReactComponent as Email } from "../../assets/svg/email-icon-big.svg";

import { useState } from "react";

const UserSignIn = () => {
  const [passwordType, setpasswordType] = useState("password");
  const [bgCng, setBgCng] = useState(true);
  return (
    <div className="userSignin">
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
      </div>
    </div>
  );
};

export default UserSignIn;
