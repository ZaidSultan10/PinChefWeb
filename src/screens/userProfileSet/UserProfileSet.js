import React, { useState } from "react";
import "./UserProfileSet.css";
import { Button } from "@material-ui/core";
import ProfileImage from "../../assets/svg/Profile-image.svg";
import { useHistory } from "react-router-dom";
// import Modal from "react-modal";
// import LocationIcon from "../../assets/svg-for-user-profile/Location.svg";
import "./UserProfileSetModal.css";
import { connect } from "react-redux";
import { createUserProfileStart } from "../../redux/User/UserAction";

const UserProfileSet = ({ createUserProfileStart, currentUser }) => {
  //   const [modalIsOpen, setModalIsOpen] = useState(false);

  const history = useHistory();

  //   const openModal = () => {
  //     setModalIsOpen(true);
  //   };
  //   const closeModal = () => {
  //     setModalIsOpen(false);
  //   };
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    createUserProfileStart({
      status: currentUser.status,
      name,
      username,
      phone,
    });
    // console.log();
  };
  return (
    <>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="userwelcomehomemodal1"
        contentLabel="Notification Modal"
      > 
        <div className="user-welcome-container">
          <div className="user-welcome-top">
            <h5>CONGRATULATIONS</h5>
            <img src={LocationIcon} alt="star" />
          </div>
          <div className="user-welcome-center">
            <p>
              Thank you signing up! Enjoy the app. Please allow to use your
              location for us to help your search
            </p>
          </div>
          <div className="user-welcome-bottom">
            <Button
              onClick={() => {
                history.push("/homepage");
              }}
              className="user-welcome-no"
            >
              No
            </Button>
            <Button
              onClick={() => {
                history.push("/homepage");
              }}
              className="user-welcome-allow"
            >
              Allow
            </Button>
          </div>
        </div>
      </Modal> */}
      <div className="userProfileSet">
        <div className="userProfileSet__container">
          <div className="userProfileSet__header">
            <h4>Create Profile</h4>
          </div>
          <div className="userProfileSet__picture">
            <img src={ProfileImage} alt="star" />
          </div>
          <div className="userProfileSet__input">
            <h5>Name/Lastname</h5>
            <input
              type="text"
              placeholder="Enter name and last name"
              name="name"
              autoComplete="true"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="userProfileSet__input2">
            <h5>User ID-Nickname</h5>
            <input
              type="text"
              placeholder="ex:Johndoe23"
              name="username"
              autoComplete="true"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="userProfileSet__input3">
            <h5>
              Mobile Number <span>(Optional)</span>
            </h5>
            <input
              type="number"
              placeholder="+1 xxx xxx xxxx"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="userProfileSet__button">
            {/* onClick={openModal} */}
            <Button onClick={handleSubmit}>Continue</Button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  createUserProfileStart: (obj) => dispatch(createUserProfileStart(obj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileSet);
