import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters';
import GoogleAds from '../googleAds/GoogleAds'
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
                    <div className='feedRecipe__filters'>
                        {
                            chefFilterProp && (
                                <>
                                    <ChefMainFilters />
                                </>
                            )
                        }
                        <MainFeedFilters />
                    </div>
                    <div className='feedRecipe__content'>
                        <MainFeedRecipe />
                        <MainFeedRecipe/>
                    </div>
                </div>
                <div className='feedRecipe__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedRecipe
