import React from 'react'
import './FeedFaqChef.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFaqChef from '../mainFaqChef/MainFaqChef'

const FeedFaqChef = () => {
    return (
        <div className='feedFaqChef'>
            <div className='feedFaqChef__container'>
                <div className='feedFaqChef__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedFaqChef__center'>
                    <MainFaqChef />
                </div>
                <div className='feedFaqChef__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedFaqChef
