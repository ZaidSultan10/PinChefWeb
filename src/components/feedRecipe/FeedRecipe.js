import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters';
import GoogleAds from '../googleAds/GoogleAds'
import MainFeed from '../mainFeed/MainFeed';
import MainFeedFilters from '../mainFeedFilters/MainFeedFilters';
import MainFeedRecipe from '../mainFeedRecipe/MainFeedRecipe';
import './FeedRecipe.css'

const FeedRecipe = ({chefFilterProp}) => {
    return (
        <div className='feedRecipe'>
            <div className='feedRecipe__container'>
                <div className='feedRecipe__left'>
                    <GoogleAds filterSearchProp={true} />
                </div>
                <div className='feedRecipe__center'>
                    {
                        chefFilterProp && (
                            <>
                                <ChefMainFilters />
                            </>
                        )
                    }
                    <MainFeedFilters />
                    <MainFeedRecipe />
                    <MainFeedRecipe/>
                </div>
                <div className='feedRecipe__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedRecipe
