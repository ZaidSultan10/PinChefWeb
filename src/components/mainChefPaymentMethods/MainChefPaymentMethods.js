import React from 'react'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import './MainChefPaymentMethods.css'
import { Button } from '@material-ui/core'


const MainChefPaymentMethods = () => {
    return (
        <div className='mainChefPaymentMethods'>
            <div className='mainChefPaymentMethods__header'>
                <img src={LeftIcon} />
                <h5>PAYMENT METHODS</h5>
            </div>
            <div className='mainChefPaymentMethods__text'>
                <p>
                    To activate your online payment options,
                    please sign in to your accounts in each 
                    platform
                </p>
            </div>
            <div className='mainChefPaymentMethods__stripe'>
                <h5>Stripe</h5>
                <Button>Sign In</Button>
            </div>
            <div className='mainChefPaymentMethods__paypal'>
                <div className='mainChefPaymentMethods__mail'>
                    <h5>Paypal</h5>
                    <p>pinchef@pinchef.io</p>
                </div>
                <Button>Signed In</Button>
            </div>
            <div className='mainChefPaymentMethods__warning1'>
                <img src={InfoIcon} />
                <p>Cash and Credit Card on Delivery is not available
                    for e-Masterclass
                </p>
            </div>
            <div className='mainChefPaymentMethods__warning2'>
                <img src={InfoIcon} />
                <p>To add or delete payment options, go back
                    to the chef's profile details
                </p>
            </div>
        </div>
    )
}

export default MainChefPaymentMethods
