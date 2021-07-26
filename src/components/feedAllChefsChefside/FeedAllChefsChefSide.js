import React from 'react'
import GoogleAds2 from '../../components/googleAds2/GoogleAds2'
import ChefAds from '../../components/chefAds/ChefAds'
import MainFeedFilter2 from '../mainFeedfilters2/MainFeedFilter2'
import MainAllChefs from '../mainAllChefs/MainAllChefs'
import './FeedAllChefsChefSide.css'

const FeedAllChefsChefSide = ({allChefProp}) => {
    return (
        <div className='feedAllChefSide'>
            <div className='feedAllChefSide__container'>
                <div className='feedAllChefSide__left'>
                    <GoogleAds2 />
                </div>
                <div className='feedAllChefSide__center'>
                    <MainFeedFilter2 />
                    {
                        allChefProp ? (
                            <>
                                <MainAllChefs followProp={true} />
                                <MainAllChefs followProp={true} />
                            </>
                        ):(
                            <>
                                <MainAllChefs  />
                                <MainAllChefs  />
                            </>
                        )
                    }
                    
                </div>
                <div className='feedAllChefSide__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedAllChefsChefSide
