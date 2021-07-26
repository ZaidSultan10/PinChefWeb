import React from 'react'
import MainFeedRecipe from '../mainFeedRecipe/MainFeedRecipe'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import GoogleAds from '../googleAds/GoogleAds'
import MainFeedFilter6 from '../mainFeedFilter6/MainFeedFilter6'
import AddNewIcon from '../../assets/svg/Creat-new-button.svg'
import './ChefRecipeFeedAllMyPost.css'

const ChefRecipeFeedAllMyPost = () => {
    return (
        <div className='chefRecipeFeedAllMyPost'>
            <div className='chefRecipeFeedAllMyPost__container'>
                <div className='chefRecipeFeedAllMyPost__left'>
                    <GoogleAds filterSearchProp={true} />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefRecipeFeedAllMyPost__center'>
                    <ChefMainFilters />
                    <MainFeedFilter6 />
                    <MainFeedRecipe />
                    <div className='chefRecipeFeedAllMyPost__plus'>
                        <img src={AddNewIcon} />
                     </div>
                </div>
                <div className='chefRecipeFeedAllMyPost__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefRecipeFeedAllMyPost
