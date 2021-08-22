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
import {ReactComponent as SearchIcon2} from '../../assets/svg/search-icon2.svg'




const Header = ({ searchProp,notificationProp }) => {

  const history = useHistory()

  return (
    <div className='header-main'>
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="Pinchef-Logo" />
      </div>
      <div className="header__search">
        <div className='header__search__container'>
          {searchProp && (
            <>
              <input
                className="header__search__input"
                placeholder="Search Here..."
              />
              <img src={SearchIcon} alt="Search-Icon" />
              <SearchIcon2 className='search2' />
            </>
          )}
          </div>
      </div>
      <div className="header__right">
        <img src={FilterIconGrey} className="filter__icon" alt="filter" />
        {
          notificationProp ? (
            <img onClick={() => {
              history.push('/chef/notifications')
            }} src={NotificationIcon} className='notification__icon' alt='notify' />
          ):(
            <img onClick={() => {
              history.push('/user/notifications')
            }} src={NotificationIcon} className='notification__icon' alt='notify' />
          )
        }
        
        <img src={AvatarIcon} className="header__avatar" alt="User Profile" />
      </div>
    </div>
    </div>
  );
};

export default Header;
