import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainTermsUser from '../mainTermsUser/MainTermsUser'
import './FeedTermsUser.css'


const FeedTermsUser = () => {
    return (
        <div className='feedTermsUser'>
           <div className='feedTermsUser__container'>
                <div className='feedTermsUser__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedTermsUser__center'>
                    <MainTermsUser />
                </div>
                <div className='feedTermsUser__right'>
                    <ChefAds />
                </div>
            </div> 
        </div>
    )
}

export default FeedTermsUser
