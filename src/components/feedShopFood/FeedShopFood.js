import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds2 from '../googleAds2/GoogleAds2'
import MainFeedFilter3 from '../mainFeedFilter3/MainFeedFilter3'
import MainShopFood from '../mainShopFood/MainShopFood'
import './FeedShopFood.css'

const FeedShopFood = () => {
    return (
        <div className='feedClass'>
            <div className='feedClass__container'>
                <div className='feedClass__left'>
                    <GoogleAds2 adsProp2={true}/>
                </div>
                <div className='feedClass__center'>
                    <MainFeedFilter3 />
                    <MainShopFood />
                    <MainShopFood />
                </div>
                <div className='feedClass__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedShopFood