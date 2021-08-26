import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds2 from '../googleAds2/GoogleAds2'
import MainFeedFilters from '../mainFeedFilters/MainFeedFilters'
import MainFeedMasterclass from '../mainFeedMasterclass/MainFeedMasterclass'
import './FeedMasterclass.css'

const FeedMasterclass = () => {
    return (
        <div className='feedmasterClass'>
            <div className='feedmasterClass__container'>
                <div className='feedmasterClass__left'>
                    <GoogleAds2 adsProp={true} />
                </div>
                <div className='feedmasterClass__center'>
                    <div className='feedmasterClass__filter'>
                        <MainFeedFilters />
                    </div>
                    <div className='feedmasterClass__content'>
                        <MainFeedMasterclass />
                        <MainFeedMasterclass />
                    </div>
                    
                </div>
                <div className='feedmasterClass__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedMasterclass
