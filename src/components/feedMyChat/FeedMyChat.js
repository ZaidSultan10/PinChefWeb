import React from 'react'
import './FeedMyChat.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainMyChat from '../mainMyChat/MainMyChat'

const FeedMyChat = () => {
    return (
        <div className='feedMyChat'>
            <div className='feedMyChat__container'>
                <div className='feedMyChat__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedMyChat__center'>
                   <MainMyChat />
                </div>
                <div className='feedMyChat__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedMyChat
