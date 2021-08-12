import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./UserOtp.css";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import ResendIcon from "../../assets/svg-for-user-profile/EMail_icon.svg";
import "./UserOtpModal.css";
import { connect } from "react-redux";

const UserOtp = ({ currentUser }) => {
  const history = useHistory();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="userotp1"
        contentLabel="Notification Modal"
      >
        <div className="userotp-resend-container">
          <div className="userotp-resend-icon">
            <img src={ResendIcon} alt="star" />
          </div>
          <div className="userotp-resend-text">
            <p>
              An OTP was send to your registered email address. Please enter the
              OTP in the next page
            </p>
          </div>
        </div>
      </Modal>
      <div className="userOtp">
        <div className="userOtp__container">
          <h4>Verify</h4>
          <h3>{currentUser ? currentUser.email : "Test@email.com"}</h3>
          <h4>Enter 4 digit OTP</h4>
          <div className="userOtp__input">
            <input className="input1" type="number" />
            <input className="input2" type="number" />
            <input className="input3" type="number" />
            <input className="input4" type="number" />
            <input className="input5" type="number" />
            <input className="input6" type="number" />
            <Button
              onClick={() => {
                history.push("/user/set-profile");
              }}
            >
              OK
            </Button>
          </div>
          <Button onClick={openModal}>Resend email</Button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(UserOtp);
