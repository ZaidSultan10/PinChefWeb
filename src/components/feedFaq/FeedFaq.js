import React from 'react'
import './FeedFaq.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFaq from '../mainFaq/MainFaq'

const FeedFaq = () => {
    return (
        <div className='feedFaq'>
            <div className='feedFaq__container'>
                <div className='feedFaq__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedFaq__center'>
                    <MainFaq />
                </div>
                <div className='feedFaq__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedFaq
