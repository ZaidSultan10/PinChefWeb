import React from 'react'
import MainFeedFilter6 from '../mainFeedFilter6/MainFeedFilter6'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import SamplePage from '../../screens/samplePage/SamplePage'
import MainFeed from '../mainFeed/MainFeed'
import AddNewIcon from '../../assets/svg/Creat-new-button.svg'
import GoogleAds from '../googleAds/GoogleAds'
import './ChefHomeFeedAllMyPost.css'


const ChefHomeFeedAllMyPost = () => {
    return (
        <div className='chefHomeFeedAllMyPost'>
            <div className='chefHomeFeedAllMyPost__container'>
                <div className='chefHomeFeedAllMyPost__left'>
                    <GoogleAds />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefHomeFeedAllMyPost__center'>
                    <ChefMainFilters />
                    <MainFeedFilter6 />
                    <MainFeed />
                    <div className='createHomeFeedAllMyPost__plus'>
                        <img src={AddNewIcon} />
                     </div>                
                </div>
                <div className='chefHomeFeedAllMyPost__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefHomeFeedAllMyPost
