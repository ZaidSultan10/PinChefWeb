import React, { useState } from "react";
import "./MainSettings.css";
import "./MainSettingsModal.css";
import { Avatar } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import HorizontalLine from "../../assets/svg/Horizontal-spliter-1.svg";
import NotificationsIcon from "../../assets/svg/Notifications-icon.svg";
import HelpIcon from "../../assets/svg/Help-icon.svg";
import LanguageIcon from "../../assets/svg/Languages.svg";
import SettingsBrightnessIcon from "../../assets/svg/day-and-night-mode.svg";
import ShareIcon from "../../assets/svg/share-2.svg";
import StarIcon from "../../assets/svg/Star.svg";
import CardMembershipIcon from "../../assets/svg/subscription-icon.svg";
import PaymentIcon from "../../assets/svg/Payment-methods-icon.svg";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import NotificationIcon from "../../assets/svg/Notifications-icon.svg";
import FaqIcon from "../../assets/svg/Faq-icon.svg";
import AboutIcon from "../../assets/svg-for-user-profile/About-app-info-icon.svg";
import ContactIcon from "../../assets/svg-for-user-profile/Contact-us-icon.svg";
import TermsIcon from "../../assets/svg/Path-28624.svg";
import LightModeIcon from "../../assets/svg-for-user-profile/Light-mode.svg";
import DarkModeIcon from "../../assets/svg-for-user-profile/Dark-mode.svg";
import SystemModeIcon from "../../assets/svg-for-user-profile/System-mode.svg";
import FaceBookIcon from '../../assets/svg-for-user-profile/001-facebook.svg'
import WhatsappIcon from '../../assets/svg-for-user-profile/003-whatsapp.svg'
import SkypeIcon from '../../assets/svg-for-user-profile/006-skype.svg'
import MessengerIcon from '../../assets/svg-for-user-profile/Facebook-Messenger-cut-in-circle-shadow.svg'
import LinkedinIcon from '../../assets/svg-for-user-profile/010-linkedin.svg'
import InstagramIcon from '../../assets/svg-for-user-profile/011-instagram.svg'
import TwitterIcon from '../../assets/svg-for-user-profile/013-twitter.svg'
import EmailIcon from '../../assets/svg-for-user-profile/Emal.svg'
import { Button } from "@material-ui/core";
import LinkIcon from '../../assets/svg-for-user-profile/copy-link.svg'



const MainSettings = ({ settingsProp }) => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };
  const openModal2 = () => {
    setIsOpen2(true);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };

  const openModal3 = () => {
    setIsOpen3(true);
  };

  const closeModal3 = () => {
    setIsOpen3(false);
  };
  const openModal4 = () => {
    setIsOpen4(true);
  };

  const closeModal4 = () => {
    setIsOpen4(false);
  };

  const shareIcons = [{
    icon:FaceBookIcon
  },{
    icon:WhatsappIcon
  },{
    icon:SkypeIcon
  },{
    icon:MessengerIcon
  },{
    icon:LinkedinIcon
  },{
    icon:InstagramIcon
  },{
    icon:TwitterIcon
  },{
    icon:EmailIcon
  }]

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="notificationModal1"
        contentLabel="Notification Modal"
      >
        <div className="notification-modal-options">
          <img src={NotificationIcon} alt="star" />
          <h5>App Notifications</h5>
          <label className="switch">
            <input type="checked"  className="input1" />
            <span className="slider"></span>
          </label>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        className="helpModal1"
        contentLabel="Notification Modal"
      >
        <div className="help-modal-options">
          <div className="help-modal-faq">
            <div className="help-modal-faq1">
              <img src={FaqIcon} alt="star" />
              <h5>Faq</h5>
              <ChevronRight className="help-chevron" />
            </div>

            <img className="help-line" src={HorizontalLine} alt="star" />
          </div>
          <div className="help-modal-faq">
            <div className="help-modal-faq2">
              <img src={TermsIcon} alt="star" />
              <h5>Terms & Privacy Policy</h5>
              <ChevronRight className="help-chevron" />
            </div>
            <div className="help-line">
              <img src={HorizontalLine} alt="star" />
            </div>
          </div>
          <div className="help-modal-faq">
            <div className="help-modal-faq2">
              <img src={ContactIcon} alt="star" />
              <h5>Contact Us</h5>
              <ChevronRight className="help-chevron" />
            </div>
            <div className="help-line">
              <img src={HorizontalLine} alt="star" />
            </div>
          </div>
          <div className="help-modal-faq">
            <div className="help-modal-faq2">
              <img src={AboutIcon} alt="star" />
              <h5>About</h5>
              <ChevronRight className="help-chevron" />
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        className="languageModal1"
        contentLabel="Notification Modal"
      >
        <div className="language-modal-options">
          <div className="language-modal-lang">
            <h4>English</h4>
            <img src={HorizontalLine} alt="star" />
          </div>
          <div className="language-modal-lang1">
            <h4>Spanish</h4>
            <img src={HorizontalLine} alt="star" />
          </div>
          <div className="language-modal-lang1">
            <h4>French</h4>
            <img src={HorizontalLine} alt="star" />
          </div>
          <div className="language-modal-lang1">
            <h4>Turkish</h4>
            <img src={HorizontalLine} alt="star" />
          </div>
          <div className="language-modal-lang1">
            <h4>Russian</h4>
            <img src={HorizontalLine} alt="star" />
          </div>
          <div className="language-modal-lang1">
            <h4>Arabic</h4>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        className="themeModal1"
        contentLabel="Notification Modal"
      >
        <div className="theme-modal-options">
          <div className="theme-option1">
            <div className="theme-light">
              <img src={LightModeIcon} alt="star" />
              <h3>Light Mode</h3>
              <label className="switch">
                <input type="checked" checked className="input1" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="theme-line">
              <img src={HorizontalLine} alt="star" />
            </div>
          </div>
          <div className="theme-option2">
            <div className="theme-dark">
              <img src={DarkModeIcon} alt="star" />
              <h3>Dark Mode</h3>
              <label className="switch">
                <input type="checked" checked className="input1" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="theme-line">
              <img src={HorizontalLine} alt="star" />
            </div>
          </div>
          <div className="theme-option3">
            <div className="theme-system">
              <img src={SystemModeIcon} alt="star" />
              <h3>System Mode</h3>
              <label className="switch">
                <input type="checked" checked className="input1" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="theme-line">
              <img src={HorizontalLine} alt="star" />
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={modalIsOpen4}
        onRequestClose={closeModal4}
        className="sharefriendsModal1"
        contentLabel="Notification Modal">
          <div className='share-modal-options'>
              <div className='share-modal-options-header'>
                  <h6>TELL ABOUT US</h6>
              </div>
              <div className='share-modal-options_icons'>
                  {shareIcons.map((shareIcon) => (
                      
                          <img src={shareIcon.icon} alt='icons' />
                      
                  ))}
              </div>
              <div className='share-modal-options-email'>
                  <div className='email-left-icon'>
                      <img src={LinkIcon} alt='icon' />
                  </div>
                  <div className='email-right-input'>
                      <p>Enter email :</p>
                      <input />
                  </div>    
              </div>
              <div className='share-modal-options-buttons'>
                  <Button onClick={closeModal4} className='share-cancel'>Cancel</Button>
                  <Button className='share-share'>Share</Button>
              </div>
          </div>
      </Modal>
      <div className="mainSettings">
        <div className="mainSettings__container">
          <div className="mainSettings__profile">
            <div className="mainSettings__profilePicture">
              <Avatar className="mainSettings__avatar" />
              <div className="mainSettings__name">
                <h4>John Doe</h4>
                <h4>User ID/Name</h4>
              </div>
            </div>
            <div className="mainSettings__profileDetail">
              {settingsProp ? (
                <ChevronRight
                  onClick={() => {
                    history.push("/chef/settings/profile");
                  }}
                  className="mainSettings__rightIcon"
                />
              ) : (
                <ChevronRight
                  onClick={() => {
                    history.push("/user/settings/profile");
                  }}
                  className="mainSettings__rightIcon"
                />
              )}
            </div>
          </div>
          <div onClick={openModal} className="mainSettings__notification">
            <img src={NotificationsIcon} className="notify__icon" alt="star" />
            <h4>NOTIFICATIONS</h4>
          </div>
          <div className="mainSettings__divider">
            <img src={HorizontalLine} alt="line" />
          </div>
          <div onClick={openModal1} className="mainSettings__notifications">
            <img src={HelpIcon} alt="star" className="help__icon" />
            <h4>HELP</h4>
          </div>
          <div className="mainSettings__divider">
            <img src={HorizontalLine} alt="line" />
          </div>
          {settingsProp && (
            <>
              <div
                onClick={() => {
                  history.push("/chef/payment/methods");
                }}
                className="mainSettings__notifications"
              >
                <img src={PaymentIcon} alt="star" className="help__icon" />
                <h4>PAYMENT METHODS</h4>
              </div>
              <div className="mainSettings__divider">
                <img src={HorizontalLine} alt="line" />
              </div>
              <div
                onClick={() => {
                  history.push("/chef/settings/subscription");
                }}
                className="mainSettings__notifications"
              >
                <img
                  src={CardMembershipIcon}
                  className="help__icon"
                  alt="star"
                />
                <h4>SUBSCRIPTIONS</h4>
              </div>
              <div className="mainSettings__divider">
                <img src={HorizontalLine} alt="line" />
              </div>
            </>
          )}
          <div className="mainSettings__notifications">
            <img
              onClick={openModal2}
              src={LanguageIcon}
              className="language__icon"
              alt="star"
            />
            <h4>LANGUAGES</h4>
          </div>
          <div className="mainSettings__divider">
            <img src={HorizontalLine} alt="line" />
          </div>
          <div onClick={openModal3} className="mainSettings__notifications">
            <img
              src={SettingsBrightnessIcon}
              className="theme__icon"
              alt="star"
            />
            <h4>THEME</h4>
          </div>
          <div className="mainSettings__divider">
            <img src={HorizontalLine} alt="line" />
          </div>
          <div onClick={openModal4} className="mainSettings__notifications">
            <img src={ShareIcon} className="sharing__icon" alt="star" />
            <h4>SHARE WITH FRIENDS</h4>
          </div>
          <div className="mainSettings__divider">
            <img src={HorizontalLine} alt="line" />
          </div>
          <div className="mainSettings__notifications">
            <img src={StarIcon} className="rate__icon" alt="star" />
            <h4>RATE US</h4>
          </div>
          <div className="mainSettings__divider">
            <img src={HorizontalLine} alt="line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSettings;
