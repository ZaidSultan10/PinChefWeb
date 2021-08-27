import React from 'react'
import Ads from '../ads/Ads'
import MainFeedFilter4 from '../mainFeedFilter4/MainFeedFilter4'
import ChefAds from '../chefAds/ChefAds'
import './FeedStarFoodService.css'
import MainShopFood from '../mainShopFood/MainShopFood'


const FeedStarFoodService = () => {
    return (
        <div className='feedStarFoodService'>
            <div className='feedStarFoodService__container'>
                <div className='feedStarFoodService__left'>
                    <Ads className='feedStarFoodService__ads' />
                    <Ads className='feedStarFoodService__ads' />
                    <Ads className='feedStarFoodService__ads' />
                    <Ads className='feedStarFoodService__ads' />
                </div>
                <div className='feedStarFoodService__center'>
                    <div className='feedStarFoodService__filter'>
                        <MainFeedFilter4/>
                    </div>   
                    <div className='feedStarFoodService__content'>
                        <MainShopFood />
                    </div>
                    
                </div>
                <div className='feedStarFoodService__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedStarFoodService