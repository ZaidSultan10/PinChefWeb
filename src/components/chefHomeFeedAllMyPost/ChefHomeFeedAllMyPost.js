import React from "react";
import MainFeedFilter6 from "../mainFeedFilter6/MainFeedFilter6";
import Ads from "../ads/Ads";
import ChefAds from "../chefAds/ChefAds";
import ChefMainFilters from "../chefMainFilters/ChefMainFilters";
import MainFeed from "../mainFeed/MainFeed";
import AddNewIcon from "../../assets/svg/Creat-new-button.svg";
import GoogleAds from "../googleAds/GoogleAds";
import "./ChefHomeFeedAllMyPost.css";
import { useHistory } from "react-router-dom";

const ChefHomeFeedAllMyPost = () => {
  const history = useHistory();

  return (
    <div className="chefHomeFeedAllMyPost">
      <div className="chefHomeFeedAllMyPost__container">
        <div className="chefHomeFeedAllMyPost__left">
          <GoogleAds />
          <Ads />
          <Ads />
          <Ads />
        </div>
        <div className="chefHomeFeedAllMyPost__center">
          <ChefMainFilters />
          <MainFeedFilter6 />
          <MainFeed />
          <div className="createHomeFeedAllMyPost__plus">
            <img
              onClick={() => {
                history.push("/chef/home/create-post");
              }}
              src={AddNewIcon}
              alt="icon"
            />
          </div>
        </div>
        <div className="chefHomeFeedAllMyPost__right">
          <ChefAds />
        </div>
      </div>
    </div>
  );
};

export default ChefHomeFeedAllMyPost;
