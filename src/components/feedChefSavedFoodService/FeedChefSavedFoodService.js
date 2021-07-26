import React from 'react'
import './FeedChefSavedFoodService.css'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds from '../googleAds/GoogleAds'
import MainFeedFilter8 from '../mainFeedFilter8/MainFeedFilter8'
import MainFeedFilter7 from '../mainFeedFilter7/MainFeedFilter7'
import MainShopFood from '../mainShopFood/MainShopFood'


const FeedChefSavedFoodService = () => {
    return (
        <div className='feedChefSavedFoodService'>
            <div className='feedChefSavedFoodService__container'>
                <div className='feedChefSavedFoodService__left'>
                    <GoogleAds filterSearchProp={true} />
                </div>
                <div className='feedChefSavedFoodService__center'>
                    <MainFeedFilter7 className='feedChefSavedFoodService__filter7' />
                    <MainFeedFilter8 />
                    <MainShopFood cartProp={true}/> 
                </div>
                <div className='feedChefSavedFoodService__right'>
                    <ChefAds />
                </div>
            </div>

        </div>
    )
}

export default FeedChefSavedFoodService
