import React from 'react'
import './ChefHomeFeedAll.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import SamplePage from '../../screens/samplePage/SamplePage'
import MainFeed from '../mainFeed/MainFeed'
import AddNewIcon from '../../assets/svg/Creat-new-button.svg'
import GoogleAds from '../googleAds/GoogleAds'


const ChefHomeFeedAll = ({mypostProp}) => {
    return (
        <div className='chefHomeFeedAll'>
            <div className='chefHomeFeedAll__container'>
                <div className='chefHomeFeedAll__left'>
                    <GoogleAds />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefHomeFeedAll__center'>
                    <ChefMainFilters />
                    <MainFeedFilter5 />
                    <MainFeed />
                    {
                        mypostProp && (
                            <div className='createHomeFeedAll__plus'>
                                <img src={AddNewIcon} />
                             </div>
                        )
                    }
                    
                </div>
                <div className='chefHomeFeedAll__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefHomeFeedAll
