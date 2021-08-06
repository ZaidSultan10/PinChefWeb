import React from "react";
import VisaIcon from "../../assets/svg/Visa-icon.svg";
import UnionPayIcon from "../../assets/svg/unionpay.svg";
import MasterCardIcon from "../../assets/svg/Mastercard-icon.svg";
import JcbIcon from "../../assets/svg/jcb-icon.svg";
import AmericanExpressIcon from "../../assets/svg/american-express-icon.svg";
import DiscoverIcon from "../../assets/svg/discover-icon.svg";
import { Button } from "@material-ui/core";
import InfoIcon from "../../assets/svg/info-icon-red.svg";
import PaypalIcon from "../../assets/svg/paypal.svg";
import ApplePayICon from "../../assets/svg/apple-pay.svg";
import "./MainChefCookShip.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const MainChefCookShip = ({ shipProp }) => {
  return (
    <div className="mainChefCookShip">
      <div className="mainChefCookShip__topArea">
        <div className="mainChefCookShip__photo">
          <Avatar className="mainChefCookShip__avatar" />
        </div>
        <div className="mainChefCookShip__chefName">
          <h3>Matt Wilson</h3>
          <p>Head Chef</p>
        </div>
      </div>
      <div className="mainChefCookShip__header">
        <div className="mainChefCookShip__item">
          <h5>Item</h5>
        </div>
        <div className="mainChefCookShip__bill">
          <h5 className="cook-price">QTY</h5>
          <h5 className="cook-price">Price</h5>
          <h5>Amount</h5>
        </div>
      </div>
      <div className="mainChefCookShip__info">
        <div className="mainChefCookShip__itemTitle">
          <p>Cook and Deliver</p>
        </div>
        <div className="mainChefCookShip__itemBill">
          <h5 className="cook-price1">1</h5>
          <h5 className="cook-price2">$23.80</h5>
          <h5 className="cook-price3">$23.80</h5>
        </div>
      </div>
      <div className="mainChefCookShip__subTotal">
        <h5>
          Tax:<span>%8</span>
        </h5>
        <h5>
          Shipping:<span>$8:00</span>
        </h5>
        <h5>
          Total:<span className="total-bill">$ 39.84</span>
        </h5>
      </div>
      <div className="mainChefCookShip__note">
        <h5>Address</h5>
        <textarea placeholder="Enter note" rows="7" />
      </div>
      <div className="mainChefCookShip__note">
        <h5>Extra Notes</h5>
        <textarea placeholder="Enter note" rows="7" />
      </div>
      <div className="mainChefCookShip__method">
        <h5>Payment Method</h5>
        <div className="mainChefCookShip__methodText">
          <p>Online</p>
        </div>
      </div>
      <div className="mainChefCookShip__button">
        <Button>Send Request</Button>
      </div>
      {shipProp && (
        <>
          <div className="mainChefCookShip__paymentMethods">
            <img src={VisaIcon} alt="star" />
            <img src={MasterCardIcon} alt="star" />
            <img src={AmericanExpressIcon} alt="star" />
            <img src={DiscoverIcon} alt="star" />
            <img src={JcbIcon} alt="star" />
            <img src={UnionPayIcon} alt="star" />
          </div>
          <div className="mainChefCookShip__cardInfoHeading">
            <h5>Card Information</h5>
          </div>
          <div className="mainChefCookShip__cardInfo">
            <input placeholder="Name on card" />
            <input placeholder="4242 4242 4242 4242" type="number" />
            <div className="year-cvc">
              <input className="class-month" placeholder="MM/YY" />
              <input placeholder="CVC" className="class-cvc" />
            </div>
          </div>
          <div className="mainChefCookShip__warning1">
            <img src={InfoIcon} alt="star" />
            <p>All Card payments are processed through Stripe</p>
          </div>
          <div className="mainChefCookShip__warning2">
            <img src={InfoIcon} alt="star" />
            <p>
              By paying you accept the <Link to="/">payment policy</Link>
            </p>
          </div>
          <div className="mainChefCookShip__payButton">
            <Button>PAY</Button>
            <p>OR PAY WITH</p>
          </div>
          <div className="mainChefCookShip__option2">
            <img src={PaypalIcon} alt="star" />
            <img src={ApplePayICon} alt="star" />
          </div>
        </>
      )}
    </div>
  );
};

export default MainChefCookShip;
