import React from 'react'
import './FeedRecipeDetails.css'
import GoogleAds from '../googleAds/GoogleAds'
import ChefAds from '../chefAds/ChefAds'
import MainFeedRecipeDetails from '../mainFeedRecipeDetails/MainFeedRecipeDetails'

const FeedRecipeDetails = () => {
    return (
        <div className='feedRecipeDetails'>
            <div className='feedRecipeDetails__container'>
                <div className='feedRecipeDetails__left'>
                    <GoogleAds filterSearchProp={true} />
                </div>
                <div className='feedRecipeDetails__center'>
                    <MainFeedRecipeDetails />
                </div>
                <div className='feedRecipeDetails__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedRecipeDetails
