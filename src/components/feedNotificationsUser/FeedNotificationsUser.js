import React from 'react'
import './FeedNotificationsUser.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainNotificationsUser from '../mainNotificationsUser/MainNotificationsUser'

const FeedNotificationsUser = () => {
    return (
        <div className='feedNotificationsUser'>
            <div className='feedNotificationsUser__container'>
                <div className='feedNotificationsUser__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedNotificationsUser__center'>
                   <MainNotificationsUser />
                </div>
                <div className='feedNotificationsUser__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedNotificationsUser
