import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./UserOtp.css";
import { useHistory } from "react-router-dom";

//import Modal from "react-modal";
//import ResendIcon from "../../assets/svg-for-user-profile/EMail_icon.svg";

import "./UserOtpModal.css";
import { connect } from "react-redux";
import {
  getVerificationCodeStart,
  verificationStart,
} from "../../redux/User/UserAction";

const UserOtp = ({
  currentUser,
  getVerificationCodeStart,
  verificationStart,
}) => {
  const history = useHistory();
  const [confirmationCode, setConfirmationCode] = useState("");
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleResendEmail = () => {
    getVerificationCodeStart(currentUser._id);
  };
  const handleVerify = async () => {
    await verificationStart(currentUser._id, confirmationCode);
    if (currentUser.status && currentUser.status === "active")
      if (currentUser.userType === "user") history.replace("/user/set-profile");
      else history.replace("/user/set-profile");
    await setConfirmationCode("");
  };

  return (
    <>
      <div className="userOtp">
        <div className="userOtp__container">
          <h4 className="verify-otp">Verify</h4>
          <h3>{currentUser ? currentUser.email : "Test@email.com"}</h3>
          <h4>Enter 6 digit OTP</h4>
          <div className="userOtp__input">
            <input
              className="input8"
              type="text"
              maxLength={6}
              required
              onChange={(e) => setConfirmationCode(e.target.value)}
              value={confirmationCode}
            />

            <Button onClick={handleVerify}>OK</Button>
          </div>

          <Button onClick={handleResendEmail}>Resend Email</Button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  getVerificationCodeStart: (id) => dispatch(getVerificationCodeStart(id)),
  verificationStart: (id, confirmationCode) =>
    dispatch(verificationStart(id, confirmationCode)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserOtp);
