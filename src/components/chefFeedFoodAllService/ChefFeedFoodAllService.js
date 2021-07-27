import React from 'react'
import MainShopFood from '../mainShopFood/MainShopFood'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import './ChefFeedFoodAllService.css'
import GoogleAds2 from '../googleAds2/GoogleAds2'


const ChefFeedFoodAllService = ({cart1Prop}) => {
    return (
        <div className='chefFeedFoodAllService'>
            <div className='chefFeedFoodAllService__container'>
                <div className='chefFeedFoodAllService__left'>
                    <GoogleAds2 adsProp2={true} adsProp={true} />
                </div>
                <div className='chefFeedFoodAllService__center'>
                    <ChefMainFilters />
                    <MainFeedFilter5 />
                    {
                        cart1Prop ? (
                            <MainShopFood cartProp={true} />
                        ):(
                            <MainShopFood  />
                        )
                    }
                </div>
                <div className='chefFeedFoodAllService__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefFeedFoodAllService
