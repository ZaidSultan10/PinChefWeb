import React from 'react'
import './MainChefMasterclassCheckout.css'
import VisaIcon from '../../assets/svg/Visa-icon.svg'
import UnionPayIcon from '../../assets/svg/unionpay.svg'
import MasterCardIcon from '../../assets/svg/Mastercard-icon.svg'
import JcbIcon from '../../assets/svg/jcb-icon.svg'
import AmericanExpressIcon from '../../assets/svg/american-express-icon.svg'
import DiscoverIcon from '../../assets/svg/discover-icon.svg'
import { Button } from '@material-ui/core'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import PaypalIcon from '../../assets/svg/paypal.svg'
import ApplePayICon from '../../assets/svg/apple-pay.svg'

const MainChefMasterclassCheckout = () => {
    return (
        <div className='mainChefMasterclassCheckout'>
            <div className='mainChefMasterclassCheckout__top'>
                <h5></h5>
                <p>13 October,2020</p>
            </div>
            <div className='mainChefMasterclassCheckout__header'>
                <div className='mainChefMasterclassCheckout__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainChefMasterclassCheckout__bill'>
                    <h5 className='class-price'>QTY</h5>
                    <h5 className='class-price'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainChefMasterclassCheckout__info'>
                <div className='mainChefMasterclassCheckout__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainChefMasterclassCheckout__itemBill'>
                    <h5 className='class-price1'>1</h5>
                    <h5 className='class-price2'>$23.80</h5>
                    <h5 className='class-price3'>$23.80</h5>
                </div>
            </div>
            <div className='mainChefMasterclassCheckout__sub'>
                <div className='mainChefMasterclassCheckout__subTotal'>
                    <h5>Sub-total:</h5>
                    <h5>Tax:</h5>
                    <h5 className='total-text'>Total:</h5>
                </div>
                <div className='mainChefMasterclassCheckout__subTotalAmount'>
                    <p>$23.80</p>
                    <p>%8</p>
                    <p className='total-amount'>$39.84</p>
                </div>
            </div>
            <div className='mainChefMasterclassCheckout__details'>
                <h5>Instructions & Details</h5>
                <textarea rows='7' />
            </div>
            <div className='mainChefMasterclassCheckout__ingredients'>
                <h5>Needed Ingredients</h5>
                <textarea rows='7' />
            </div>
            <div className='mainChefMasterclassCheckout__paymentMethods'>
                <img src={VisaIcon} alt='star' />
                <img src={MasterCardIcon} alt='star' />
                <img src={AmericanExpressIcon} alt='star' />
                <img src={DiscoverIcon} alt='star' />
                <img src={JcbIcon} alt='star' />
                <img src={UnionPayIcon} alt='star' />
            </div>
            <div className='mainChefMasterclassCheckout__cardInfoHeading'>
                <h5>Card Information</h5>
            </div>
            <div className='mainChefMasterclassCheckout__cardInfo'>
                <input placeholder='Name on card' />
                <input placeholder='4242 4242 4242 4242' type='number' />
                <div className='year-cvc'>
                    <input className='class-month' placeholder='MM/YY' />
                    <input placeholder='CVC' className='class-cvc' />
                </div>
            </div>
            <div className='mainChefMasterclassCheckout__warning1'>
                <img src={InfoIcon} alt='star' />
                <p>All Card payments are processed through Stripe</p>
            </div>
            <div className='mainChefMasterclassCheckout__warning2'>
                <img src={InfoIcon} alt='star' />
                <p>By paying you accept the <a>payment policy</a></p>
            </div>
            <div className='mainChefMasterclassCheckout__payButton'>
                <Button>PAY</Button>
                <p>OR PAY WITH</p>
            </div>
            <div className='mainChefMasterclassCheckout__option2'>
                <img src={PaypalIcon} alt='star' />
                <img src={ApplePayICon} alt='star' />
            </div>
        </div>
    )
}

export default MainChefMasterclassCheckout
