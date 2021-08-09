import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainCallHistory from '../mainCallHistory/MainCallHistory'
import './FeedCallHistory.css'

const FeedCallHistory = () => {
    return (
        <div className='feedCallHistory'>
            <div className='feedCallHistory__container'>
                <div className='feedCallHistory__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedCallHistory__center'>
                    <MainCallHistory />
                </div>
                <div className='feedCallHistory__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedCallHistory
