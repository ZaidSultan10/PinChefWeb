import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import './ChefMasterclassFeedAll.css'
import MainFeedMasterclass from '../mainFeedMasterclass/MainFeedMasterclass'


const ChefMasterclassFeedAll = () => {
    return (
        <div className='chefMasterclassFeedAll'>
            <div className='chefMasterclassFeedAll__container'>
                <div className='chefMasterclassFeedAll__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefMasterclassFeedAll__center'>
                    <ChefMainFilters />
                    <MainFeedFilter5 />
                    <MainFeedMasterclass />
                </div>
                <div className='chefMasterclassFeedAll__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefMasterclassFeedAll
