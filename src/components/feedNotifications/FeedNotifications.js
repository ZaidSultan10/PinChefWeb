import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainNotifications from '../mainNotifications/MainNotifications'
import './FeedNotifications.css'


const FeedNotifications = () => {
    return (
        <div className='feedNotification'>
            <div className='feedNotification__container'>
                <div className='feedNotification__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedNotification__center'>
                    <MainNotifications />
                </div>
                <div className='feedNotification__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedNotifications
