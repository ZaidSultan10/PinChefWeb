import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainSettings from '../mainSettings/MainSettings'
import './FeedSettings.css'

const FeedSettings = () => {
    return (
        <div className='feedSettings'>
            <div className='feedSettings__container'>
                <div className='feedSettings__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedSettings__center'>
                    <MainSettings />
                </div>
                <div className='feedSettings__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedSettings
