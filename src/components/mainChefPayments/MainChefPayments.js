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
import "./MainChefPayments.css";
import LeftIcon from "../../assets/svg/left-green-arrow.svg";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const MainChefPayments = () => {
  const history = useHistory();

  return (
    <div className="mainChefPayments">
      <div className="mainChefPayments__header">
        <img
          onClick={() => {
            history.push("/chef/settings/subscription");
          }}
          src={LeftIcon}
          alt="star"
        />
        <h5>PAYMENTS</h5>
      </div>
      <div className="mainChefPayments__state">
        <h5>Monthly $9.99</h5>
      </div>
      <div className="mainChefPayments__paymentMethods">
        <img src={VisaIcon} alt="star" />
        <img src={MasterCardIcon} alt="star" />
        <img src={AmericanExpressIcon} alt="star" />
        <img src={DiscoverIcon} alt="star" />
        <img src={JcbIcon} alt="star" />
        <img src={UnionPayIcon} alt="star" />
      </div>
      <div className="mainChefPayments__cardInfoHeading">
        <h5>Card Information</h5>
      </div>
      <div className="mainChefPayments__cardInfo">
        <input placeholder="Name on card" />
        <input placeholder="4242 4242 4242 4242" type="number" />
        <div className="year-cvc">
          <input className="class-month" placeholder="MM/YY" />
          <input placeholder="CVC" className="class-cvc" />
        </div>
      </div>
      <div className="mainChefPayments__warning1">
        <img src={InfoIcon} alt="star" />
        <p>All Card payments are processed through Stripe</p>
      </div>
      <div className="mainChefPayments__warning2">
        <img src={InfoIcon} alt="star" />
        <p>
          Chosen Subscription fee will automatically be processed each period
          until the Subscription is cancelled
        </p>
      </div>
      <div className="mainChefPayments__accept">
        <div className="mainChefPayments__checkbox"></div>
        <p>
          I accept the <Link to="#">Payment Policy</Link>
        </p>
      </div>
      <div className="mainChefPayments__payButton">
        <Button>PAY</Button>
        <p>OR PAY WITH</p>
      </div>
      <div className="mainChefPayments__option2">
        <img src={PaypalIcon} alt="star" />
        <img src={ApplePayICon} alt="star" />
      </div>
    </div>
  );
};

export default MainChefPayments;
