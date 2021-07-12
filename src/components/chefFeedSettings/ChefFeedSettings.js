import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainSettings from '../mainSettings/MainSettings'
import './ChefFeedSettings.css'

const ChefFeedSettings = () => {
    return (
        <div className='chefFeedSettings'>
            <div className='chefFeedSettings__container'>
                <div className='chefFeedSettings__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefFeedSettings__center'>
                    <MainSettings settingsProp={true} />
                </div>
                <div className='chefFeedSettings__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefFeedSettings
