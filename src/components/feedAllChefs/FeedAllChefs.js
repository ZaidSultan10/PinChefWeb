import React from 'react'
import './FeedAllChefs.css'
import GoogleAds2 from '../../components/googleAds2/GoogleAds2'
import ChefAds from '../../components/chefAds/ChefAds'
import MainFeedFilter2 from '../mainFeedfilters2/MainFeedFilter2'
import MainAllChefs from '../mainAllChefs/MainAllChefs'

const FeedAllChefs = ({allChefProp}) => {
    return (
        <div className='feedChef'>
            <div className='feedChef__container'>
                <div className='feedChef__left'>
                    <GoogleAds2 />
                </div>
                <div className='feedChef__center'>
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
                <div className='feedChef__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedAllChefs
