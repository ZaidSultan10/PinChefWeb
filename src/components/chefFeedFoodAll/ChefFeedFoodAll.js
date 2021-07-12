import React from 'react'
import MainShopFood from '../mainShopFood/MainShopFood'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import './ChefFeedFoodAll.css'


const ChefFeedFoodAll = () => {
    return (
        <div className='chefFoodFeedAll'>
            <div className='chefFoodFeedAll__container'>
                <div className='chefFoodFeedAll__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefFoodFeedAll__center'>
                    <ChefMainFilters />
                    <MainFeedFilter5 />
                    <MainShopFood />
                </div>
                <div className='chefFoodFeedAll__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefFeedFoodAll
