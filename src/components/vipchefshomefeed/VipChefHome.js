import React from "react";
import "./VipChefHome.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import FoodImage from "../../assets/chef-images/chef-image1.jpg";
import LocationIcon from '../../assets/svg/Location.svg'



const VipChefHome = () => {
  return (
    <div className="vipChefHome">
      <div className="vipChefHome__container">
        <div className="vipChefHome__container__header">
          <div className="vipChefHome__text">
            <p className="text">Jhon Doe</p>
          </div>
          <div className="vipChefHome__container__location">
            <img src={LocationIcon} className="icon" />
            <p className="location__city">Miami,</p>
            <p className="location__country">FL</p>
          </div>
        </div>
        <div className="vipChefHome__profile">
          <img src={FoodImage} alt="Foods Img" />
        </div>
        <div className="vipChefHome__quotes">
          <p className="quote">
            It was a great night as we hosted catering for a wedding
          </p>
        </div>
      </div>
    </div>
  );
};

export default VipChefHome;
