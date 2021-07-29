import React from 'react'
import './FeedSettingsProfile.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainSettingsProfile from '../mainSettingsProfile/MainSettingsProfile'

const FeedSettingsProfile = ({feedProfileConditionPRop}) => {
    return (
        <div className='feedSettingsProfile'>
            <div className='feedSettingsProfile__container'>
                <div className='feedSettingsProfile__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedSettingsProfile__center'>
                    {
                        feedProfileConditionPRop ? (
                            <MainSettingsProfile chefProfileCondiitonProp={true} />
                        ):(
                            <MainSettingsProfile />
                        )
                    }
                    
                </div>
                <div className='feedSettingsProfile__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedSettingsProfile
