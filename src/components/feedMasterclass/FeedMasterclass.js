import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds2 from '../googleAds2/GoogleAds2'
import MainFeedFilters from '../mainFeedFilters/MainFeedFilters'
import MainFeedMasterclass from '../mainFeedMasterclass/MainFeedMasterclass'
import MainFeedRecipe from '../mainFeedRecipe/MainFeedRecipe'
import './FeedMasterclass.css'

const FeedMasterclass = () => {
    return (
        <div className='feedClass'>
            <div className='feedClass__container'>
                <div className='feedClass__left'>
                    <GoogleAds2 adsProp={true} />
                </div>
                <div className='feedClass__center'>
                    <MainFeedFilters />
                    <MainFeedMasterclass />
                    <MainFeedMasterclass />
                </div>
                <div className='feedClass__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedMasterclass
