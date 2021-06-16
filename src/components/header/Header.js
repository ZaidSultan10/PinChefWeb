import React from "react";
import "./Header.css";
import Logo from "../../assets/svg/PinChef-logo.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
// import { Avatar } from '@material-ui/core'
import AvatarIcon from "../../assets/svg/user-icon.svg";
import HamburgerIcon from "../../assets/svg/hamburger-icon.svg";
import FilterIcon from "../../assets/svg/Filter-button.svg";

const Header = ({ searchProp }) => {
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
        <select className="header__language__options">
          <option>EN</option>
          <option>FR</option>
          <option>SP</option>
          <option>TR</option>
          <option>RS</option>
        </select>
        <img src={FilterIcon} className="filter__icon" alt="filter" />
        <img src={AvatarIcon} className="header__avatar" alt="User Profile" />
        <img src={HamburgerIcon} className="hamburger__icon" alt="Hamburger" />
      </div>
    </div>
  );
};

export default Header;
