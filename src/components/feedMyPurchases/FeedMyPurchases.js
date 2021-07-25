import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds2 from '../googleAds2/GoogleAds2'
import MainFeedFilter4 from '../mainFeedFilter4/MainFeedFilter4'
import MainMyPurchases from '../mainMyPurchases/MainMyPurchases'
import './FeedMyPurchases.css'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'

const FeedMyPurchases = ({myPurchasesProp}) => {
    return (
        <div className='feedMyPurchases'>
            <div className='feedMyPurchases__container'>
                <div className='feedMyPurchases__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedMyPurchases__center'>
                   {
                       myPurchasesProp ? (
                            <ChefMainFilters chefFilterProp={true} />
                       ):
                       (
                            <MainFeedFilter4 />
                       )
                   }
                    <MainMyPurchases />
                    <MainMyPurchases />
                </div>
                <div className='feedMyPurchases__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedMyPurchases