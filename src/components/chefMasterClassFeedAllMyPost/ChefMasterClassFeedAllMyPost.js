import React from 'react'
import './ChefMasterClassFeedAllMyPost.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter6 from '../mainFeedFilter6/MainFeedFilter6'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import MainFeedMasterclassMyPost from '../mainFeedMasterclassMyPost/MainFeedMasterclassMyPost'


const ChefMasterClassFeedAllMyPost = () => {
    return (
        <div className='chefMasterClassFeedAllMyPost'>
            <div className='chefMasterClassFeedAllMyPost__container'>
                <div className='chefMasterClassFeedAllMyPost__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefMasterClassFeedAllMyPost__center'>
                    <ChefMainFilters />
                    <MainFeedFilter6 />
                    <MainFeedMasterclassMyPost />
                </div>
                <div className='chefMasterClassFeedAllMyPost__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefMasterClassFeedAllMyPost