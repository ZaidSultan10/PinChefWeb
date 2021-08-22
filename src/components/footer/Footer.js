import "./Footer.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeSelectedIcon } from "../../assets/svg/Home-selected.svg";
import { ReactComponent as ChefUnselectedIcon } from "../../assets/svg/chef-un-selected.svg";
import { ReactComponent as ShopUnselectedIcon } from "../../assets/svg/Shop-un-selected.svg";
import { ReactComponent as SettingsUnselectedIcon } from "../../assets/svg/settings-un-selected.svg";
import { ReactComponent as StarUnselectedIcon } from "../../assets/svg/Star-un-selected.svg";

const Footer = ({ footerProp }) => {
  return (
    <div className="footer-main">
      <div className="footer">
        {footerProp ? (
          <>
            <NavLink
              exact
              to="/chef/home/feed"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <HomeSelectedIcon className="cheficon1" />
            </NavLink>
            <NavLink
              exact
              to="/chef/profile"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <ChefUnselectedIcon className="cheficon" />
            </NavLink>
            <NavLink
              exact
              to="/chef/order-history"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <ShopUnselectedIcon className="cheficon2" />
            </NavLink>
            <NavLink
              exact
              to="/chef/rate/area"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <StarUnselectedIcon className="cheficon2" />
            </NavLink>
            <NavLink
              exact
              to="/chef/settings"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <SettingsUnselectedIcon className="cheficon3" />
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              exact
              to="/home"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <HomeSelectedIcon className="cheficon1" />
            </NavLink>
            <NavLink
              exact
              to="/user/all-chef"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <ChefUnselectedIcon className="cheficon" />
            </NavLink>
            <NavLink
              exact
              to="/shop/food"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <ShopUnselectedIcon className="cheficon2" />
            </NavLink>
            <NavLink
              exact
              to="/star/feed"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <StarUnselectedIcon className="cheficon2" />
            </NavLink>
            <NavLink
              exact
              to="/settings"
              className="footer-chef-home"
              activeClassName="footer-chef-home-active"
            >
              <SettingsUnselectedIcon className="cheficon3" />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
