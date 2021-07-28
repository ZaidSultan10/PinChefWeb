import React from 'react'
import './FeedChefProfile.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainChefProfile from '../mainChefProfile/MainChefProfile'

const FeedChefProfile = ({chefProfileFeedProp}) => {
    return (
        <div className='feedChefProfile'>
            <div className='feedChefProfile__container'>
                <div className='feedChefProfile__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedChefProfile__center'>
                    {
                        chefProfileFeedProp ? (
                            <MainChefProfile chefProfileProp={true} />
                        ):(
                            <MainChefProfile />
                        )
                    }
                    
                </div>
                <div className='feedChefProfile__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedChefProfile
