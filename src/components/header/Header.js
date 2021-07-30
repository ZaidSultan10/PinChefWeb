import React from "react";
import "./Header.css";
import Logo from "../../assets/svg/PinChef-logo-FF.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
// import { Avatar } from '@material-ui/core'
import AvatarIcon from "../../assets/svg/user-icon.svg";
//import HamburgerIcon from "../../assets/svg/hamburger-icon.svg";
//import FilterIcon from "../../assets/svg/Filter-button.svg";
import NotificationIcon from '../../assets/svg/notification-none.svg'
import FilterIconGrey from '../../assets/svg/Filters.png'
import { useHistory } from "react-router-dom";

const Header = ({ searchProp,notificationProp }) => {

  const history = useHistory()

  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="Pinchef-Logo" />
      </div>
      <div className="header__search">
        {searchProp && (
          <>
            <input
              className="header__search__input"
              placeholder="Search Here..."
            />
            <img src={SearchIcon} alt="Search-Icon" />
          </>
        )}
      </div>
      <div className="header__right">
        <img src={FilterIconGrey} className="filter__icon" alt="filter" />
        {
          notificationProp ? (
            <img onClick={() => {
              history.push('/chef/notifications')
            }} src={NotificationIcon} className='notification__icon' />
          ):(
            <img onClick={() => {
              history.push('/user/notifications')
            }} src={NotificationIcon} className='notification__icon' />
          )
        }
        
        <img src={AvatarIcon} className="header__avatar" alt="User Profile" />
      </div>
    </div>
  );
};

export default Header;
