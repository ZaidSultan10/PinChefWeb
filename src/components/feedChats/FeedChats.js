import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainChats from '../mainChats/MainChats'
import './FeedChats.css'

const FeedChats = () => {
    return (
        <div className='feedChats'>
            <div className='feedChats__container'>
                <div className='feedChats__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedChats__center'>
                    <MainChats />
                </div>
                <div className='feedChats__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedChats
