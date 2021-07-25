import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds from '../googleAds/GoogleAds'
import MainFeedFilter8 from '../mainFeedFilter8/MainFeedFilter8'
import './FeedChefSavedPosts.css'
import MainFeedFilter7 from '../mainFeedFilter7/MainFeedFilter7'


const FeedChefSavedPosts = () => {
    return (
        <div className='feedChefSavedPosts'>
            <div className='feedChefSavedPosts__container'>
                <div className='feedChefSavedPosts__left'>
                    <GoogleAds filterSearchProp={true} />
                </div>
                <div className='feedChefSavedPosts__center'>
                    <MainFeedFilter7 className='feedChefSavedPosts__filter7' />
                    <MainFeedFilter8 />
                </div>
                <div className='feedChefSavedPosts__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedChefSavedPosts
