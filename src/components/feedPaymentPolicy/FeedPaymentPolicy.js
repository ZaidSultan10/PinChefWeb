import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import './FeedPaymentPolicy.css'
import MainPaymentPolicy from '../mainPaymentPolicy/MainPaymentPolicy'

const FeedPaymentPolicy = () => {
    return (
        <div className='feedPaymentPolicy'>
            <div className='feedPaymentPolicy__container'>
                <div className='feedPaymentPolicy__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedPaymentPolicy__center'>
                    <MainPaymentPolicy />
                </div>
                <div className='feedPaymentPolicy__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedPaymentPolicy
