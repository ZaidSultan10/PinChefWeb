import React from 'react'
import GoogleAds from '../googleAds/GoogleAds'
import './Feed.css'
import ChefAds from '../chefAds/ChefAds';
import MainFeed from '../mainFeed/MainFeed';



const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed__left'>
                <GoogleAds />
            </div>
            <div className='feed__center'>
                <MainFeed />
            </div>
            <div className='feed__right'>
                <ChefAds />
            </div>
        </div>
    )
}

export default Feed
