import { Avatar } from "@material-ui/core";
import React from "react";
import "./MainFeedMasterclass.css";
import PostImage from "../../assets/chef-images/chef-image1.jpg";
import { QueryBuilder } from "@material-ui/icons";
import BookIcon from "../../assets/svg/English-Buy-ticket.svg";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import HorizontalLine from "../../assets/svg/Horizontal-spliter-1.svg";
import TicketIcon from "../../assets/svg/ticket-icon.svg";
import { useHistory } from "react-router-dom";

const MainFeedMasterclass = () => {
  const history = useHistory();

  return (
    <div className="feedMaster">
      <div className="feedMaster__container">
        <div className="feedMaster__header">
          <h3 className="pizza">PIZZA</h3>
          <img
            onClick={() => {
              history.push("/chef/masterclass/checkout");
            }}
            src={BookIcon}
            className="book"
            alt="star"
          />
          <h3
            onClick={() => {
              history.push("/user/chef/profile");
            }}
            className="feedMaster__name"
          >
            Jenah Stephanson
          </h3>
          <Avatar
            onClick={() => {
              history.push("/user/chef/profile");
            }}
            className="avatar"
          />
        </div>
        <div className="class__details">
          <div className="class__details__left">
            <img src={PostImage} alt="icon" />
            <div className="class__status">
              <h4>Italian</h4>
              <p>LIVE</p>
              <h4 className="vegan">Vegan</h4>
            </div>
          </div>
          <div className="class__details__right">
            <p>Come and enjoy cooking the yummiest Pizza you have ever seen</p>
            <p className="ingredients">
              <span>Ingredients:</span> pepper, flour, orange juice
            </p>
            <div className="class__receipt">
              <p className="class__cost">
                <span>$</span> 25{" "}
              </p>
              <p>|</p>
              <div className="class__timing">
                <QueryBuilder className="time" />
                <p>Fed-20-UTC-12:30</p>
              </div>
              <p>|</p>
              <div className="class__duration">
                <HourglassEmptyIcon className="time" />
                <p>2:30</p>
              </div>
            </div>
            <div className="mainFeedMaster__butTicket">
              <p>Available Tickets</p>
              <img src={TicketIcon} alt="star" />
              <p className="ticketCount">1</p>
            </div>
          </div>
        </div>
        <div className="bottom__line">
          <img src={HorizontalLine} alt="line" />
        </div>
      </div>
    </div>
  );
};

export default MainFeedMasterclass;
