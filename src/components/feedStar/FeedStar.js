import React from 'react'
import Ads from '../ads/Ads'
import MainFeedFilter4 from '../mainFeedFilter4/MainFeedFilter4'
import ChefAds from '../chefAds/ChefAds'
import MainFeed from '../../components/mainFeed/MainFeed'
import './FeedStar.css'

const FeedStar = () => {
    return (
        <div className='feedStar'>
            <div className='feedStar__container'>
                <div className='feedStar__left'>
                    <Ads className='feedStar__ads' />
                    <Ads className='feedStar__ads' />
                    <Ads className='feedStar__ads' />
                    <Ads className='feedStar__ads' />
                </div>
                <div className='feedStar__center'>
                    <MainFeedFilter4/>
                    <MainFeed />
                </div>
                <div className='feedStar__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedStar
