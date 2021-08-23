import React from 'react'
import ChefAds from '../../components/chefAds/ChefAds'
import GoogleAds from '../../components/googleAds/GoogleAds'
import MainFeed from '../../components/mainFeed/MainFeed'
import './SamplePage.css'
import MainFeedFilters from "../../components/mainFeedFilters/MainFeedFilters";

const SamplePage = () => {
    return (
        <div className='samplepage'>
            <div className='samplepage__container'>
                <div className='samplepage__left'>
                    <GoogleAds />
                </div>
                <div className='samplepage__center'>
                    <div className='samplepage__center__filter'>
                        <MainFeedFilters />
                    </div>
                    
                    <div className='samplepage__center__content'>
                        <MainFeed />
                    </div>
                    
                </div>
                <div className='samplepage__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default SamplePage
