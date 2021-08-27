import React from 'react'
import Ads from '../ads/Ads'
import MainFeedFilter4 from '../mainFeedFilter4/MainFeedFilter4'
import ChefAds from '../chefAds/ChefAds'
import './FeedStarRecipe.css'
import MainFeedRecipe from '../mainFeedRecipe/MainFeedRecipe'

const FeedStarRecipe = () => {
    return (
        <div className='feedStarRecipe'>
            <div className='feedStarRecipe__container'>
                <div className='feedStarRecipe__left'>
                    <Ads className='feedStarRecipe__ads' />
                    <Ads className='feedStarRecipe__ads' />
                    <Ads className='feedStarRecipe__ads' />
                    <Ads className='feedStarRecipe__ads' />
                </div>
                <div className='feedStarRecipe__center'>
                   <div className='feedStarRecipe__filter'>
                        <MainFeedFilter4/>
                   </div>
                    <div className='feedStarRecipe__content'>
                        <MainFeedRecipe  />
                    </div>
                    
                </div>
                <div className='feedStarRecipe__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedStarRecipe