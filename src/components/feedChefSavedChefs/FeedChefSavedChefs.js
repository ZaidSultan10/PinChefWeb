import React from 'react'
import './FeedChefSavedChefs.css'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds from '../googleAds/GoogleAds'
import MainFeedFilter8 from '../mainFeedFilter8/MainFeedFilter8'
import MainFeedFilter7 from '../mainFeedFilter7/MainFeedFilter7'
import MainAllChefs from '../mainAllChefs/MainAllChefs'

const FeedChefSavedChefs = () => {
    return (
        <div className='feedChefSavedChef'>
            <div className='feedChefSavedFoodService__container'>
                <div className='feedChefSavedFoodService__left'>
                    <GoogleAds filterSearchProp={true} />
                </div>
                <div className='feedChefSavedFoodService__center'>
                    <MainFeedFilter7 className='feedChefSavedFoodService__filter7' />
                    <MainFeedFilter8 />
                    <MainAllChefs followProp={true} />
                    <MainAllChefs />
                </div>
                <div className='feedChefSavedFoodService__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedChefSavedChefs
