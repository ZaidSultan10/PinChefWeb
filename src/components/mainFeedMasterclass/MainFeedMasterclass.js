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
import  {ReactComponent as ShareIconFull} from '../../assets/svg/Share-chef-profile-icon.svg'



const MainFeedMasterclass = () => {
  const history = useHistory();

  return (
    <div className="feedMasterclasses">
      <div className="feedMasterclasses__container">
        <div className="feedMasterclasses__header">
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
        <div className="masterclass__details">
          <div className="masterclass__details__left">
            <div className="masterclass__details__test">
              
              <img src={PostImage} alt="icon" />
              
              <p>LIVE</p>
              <div className='masterclass__details__shareicon'>
                <ShareIconFull className='class__share__icon' />
              </div>
              
            </div>
            
            <div className="masterclass__status">
              <h4>Italian</h4>
              
              <h4 className="vegan">Vegan</h4>
            </div>
          </div>
          <div className="masterclass__details__right">
            <p>Come and enjoy cooking the yummiest Pizza you have ever seen</p>
            <p className="ingredients">
              <span>Ingredients:</span> pepper, flour, orange juice
            </p>
            <div className="masterclass__receipt">
              <p className="masterclass__cost">
                <span>$</span> 25{" "}
              </p>
              <p>|</p>
              <div className="masterclass__timing">
                <QueryBuilder className="time" />
                <p>Fed-20-UTC-12:30</p>
              </div>
              <p>|</p>
              <div className="masterclass__duration">
                <HourglassEmptyIcon className="time" />
                <p>2:30</p>
              </div>
            </div>
            <div className="mainFeedMaster__butTicket">
              <p>Available Tickets:</p>
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
