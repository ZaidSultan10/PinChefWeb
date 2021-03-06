import React from "react";
import MainShopFood from "../mainShopFood/MainShopFood";
import ChefAds from "../chefAds/ChefAds";
import MainFeedFilter6 from "../mainFeedFilter6/MainFeedFilter6";
import ChefMainFilters from "../chefMainFilters/ChefMainFilters";
import AddNewIcon from "../../assets/svg/Creat-new-button.svg";
import "./ChefFeedFoodAllServiceMyPost.css";
import GoogleAds2 from "../googleAds2/GoogleAds2";
import { useHistory } from "react-router-dom";

const ChefFeedFoodAllServiceMyPost = ({ cart1Prop }) => {
  const history = useHistory();

  return (
    <div className="chefFeedFoodAllServiceMyPost">
      <div className="chefFeedFoodAllServiceMyPost__container">
        <div className="chefFeedFoodAllServiceMyPost__left">
          <GoogleAds2 adsProp2={true} adsProp={true} />
        </div>
        <div className="chefFeedFoodAllServiceMyPost__center">
          <ChefMainFilters />
          <MainFeedFilter6 />
          {cart1Prop ? <MainShopFood cartProp={true} /> : <MainShopFood />}

          <div className="chefFeedFoodAllServiceMyPost__plus">
            <img
              onClick={() => {
                history.push("/chef/home/feed/create-service");
              }}
              src={AddNewIcon}
              alt="icon"
            />
          </div>
        </div>
        <div className="chefFeedFoodAllServiceMyPost__right">
          <ChefAds />
        </div>
      </div>
    </div>
  );
};

export default ChefFeedFoodAllServiceMyPost;
