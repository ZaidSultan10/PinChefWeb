import "./signin.css";

import { ReactComponent as Email } from "../../assets/svg/email-icon-big.svg";

import { useState } from "react";
// import { Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { NavLink, useHistory } from "react-router-dom";

import { ReactComponent as Facebook } from "../../assets/svg/Sign-in-with-Facebook-icon.svg";
import { ReactComponent as Google } from "../../assets/svg/Sign-in-with-Google-icon.svg";
import { ReactComponent as Apple } from "../../assets/svg/Sign-in-with-apple-icon.svg";
import { connect } from "react-redux";
import { signInStart } from "../../redux/User/UserAction";
// import { setSnackbar } from "../../redux/Sneakbar/SneakbarAction";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TermsUser from "../termsUser/TermsUser";
import Modal from 'react-modal'
import MainTermsUser from "../../components/mainTermsUser/MainTermsUser";
import Footer from "../../components/footer/Footer";



const SignIn = ({ signInStart, currentUser }) => {
  const [passwordType, setpasswordType] = useState("password");
  const [bgCng, setBgCng] = useState(true);

  let history = useHistory();
  const [buttonPopup, setButtonPopup] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const handleSubmit = async () => {
    await signInStart({ email, password, userType });
    setEmail("");
    setPassword("");
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
  
  const closeModal = () => {
    setButtonPopup(false)
  }

  const openModal = () => {
    setButtonPopup(true)
  }

  return (
    <>
    <Modal isOpen={buttonPopup}
    onRequestClose={closeModal}
    className='termsmodal'>
        <MainTermsUser />
    </Modal>
    <div className="userSignin">
      <div className="userSignin__signin">
        <div className="i__am__chef__button">
          <div
            className="userSignin__top"
            onClick={() => {
              userType === "chef" ? setUserType("user") : setUserType("chef");
            }}
          >
            <h5>{userType === "user" ? "I AM A CHEF" : "FIND A CHEF"}</h5>
            <ChevronRightIcon className="right__icon__signin" />{" "}
          </div>
        </div>
        <div className="sign-in-up-signin">
          <Email className="user__email__signin" />
          <NavLink
            exact
            to="/signin"
            activeClassName="activesignin"
            className="sign-in-h2-signin signin-button"
          >
            SIGN IN
          </NavLink>
          <NavLink
            exact
            to="/signup"
            activeClassName="activesignup"
            className="sign-in-h2-signin signup-button"
          >
            SIGN UP
          </NavLink>
        </div>
        <div className="flex-column-usersignin form-usersignin">
          <div className="email-div-signin">
            <label>
              <strong>Email/ID</strong>
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
          <div className="password-div-signin">
            <label>
              <strong>Password</strong>
            </label>
            <div className="password-div-pass-signin">
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
          <div className="keep-me-sign-in-and-submit-signin">
            <div className="keep-me-sign-in-signin">
              <input type="radio" id='radiobutton' name="keepMeSignIn" />
              <div className='label-signin'>
                <label htmlFor='radiobutton'>Keep me Signed in</label>
              </div>
            </div>
            <button onClick={handleSubmit} className="continue-signin">
              Continue
            </button>
          </div>
          <div className="sign-in-with-google-and-forget-password-signin">
            <div className="sign-in-with-social-media-signin">
              <Apple className="pd-1" />
              <Facebook className="pd-1 fb-blue" />
              <Google className="pd-1" />
            </div>
            <div
              onClick={() => history.push("/user/forgot-password")}
              className="forgot-password-signin"
            >
              <p>FORGOT PASSWORD</p>
            </div>
          </div>
          <div className="Privicy-instructions-signin">
            Signing in or Signing Up means you accept out{" "}
            <strong onClick={openModal} className="clickable-signin">Terms/Conditions</strong> &{" "}
            <strong className="clickable-signin">Privacy Policy.</strong>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signInStart: (user) => dispatch(signInStart(user)),
});
//  setSnackbar: (snackbarOpen, snackbarType, snackbarMessage) =>
//     dispatch(setSnackbar(snackbarOpen, snackbarType, snackbarMessage)),
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
