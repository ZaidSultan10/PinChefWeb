import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds from '../googleAds/GoogleAds'
import MainFeedFilter8 from '../mainFeedFilter8/MainFeedFilter8'
import MainFeedFilter7 from '../mainFeedFilter7/MainFeedFilter7'
import './FeedChefSavedRecipe.css'
import MainFeedRecipe from '../mainFeedRecipe/MainFeedRecipe'


const FeedChefSavedRecipe = () => {
    return (
        <div className='feedChefSavedRecipe'>
            <div className='feedChefSavedRecipe__container'>
                <div className='feedChefSavedRecipe__left'>
                    <GoogleAds filterSearchProp={true} />
                </div>
                <div className='feedChefSavedRecipe__center'>
                    <MainFeedFilter7 className='feedChefSavedRecipe__filter7' />
                    <MainFeedFilter8 />
                    <MainFeedRecipe />
                </div>
                <div className='feedChefSavedRecipe__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedChefSavedRecipe
