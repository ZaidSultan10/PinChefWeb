import React from 'react'
import MainFeedRecipe from '../mainFeedRecipe/MainFeedRecipe'
import './ChefRecipeFeedAll.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import GoogleAds from '../googleAds/GoogleAds'


const ChefRecipeFeedAll = () => {
    return (
        <div className='chefRecipeFeedAll'>
            <div className='chefRecipeFeedAll__container'>
                <div className='chefRecipeFeedAll__left'>
                    <GoogleAds filterSearchProp={true} />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefRecipeFeedAll__center'>
                    <ChefMainFilters />
                    <MainFeedFilter5 />
                    <MainFeedRecipe />
                </div>
                <div className='chefRecipeFeedAll__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefRecipeFeedAll
