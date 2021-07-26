import React from 'react'
import MainShopFood from '../mainShopFood/MainShopFood'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import './ChefFeedFoodAllService.css'

const ChefFeedFoodAllService = ({cart1Prop}) => {
    return (
        <div className='chefFeedFoodAllService'>
            <div className='chefFeedFoodAllService__container'>
                <div className='chefFeedFoodAllService__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
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
