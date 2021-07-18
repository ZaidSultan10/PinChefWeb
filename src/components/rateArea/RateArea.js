import React from 'react'
import './RateArea.css'
import ChefAds from '../chefAds/ChefAds'
import GoogleAds from '../googleAds/GoogleAds'
import MainRateArea from '../mainRateArea/MainRateArea'

const RateArea = () => {
    return (
        <div className='rateArea'>
            <div className='rateArea__container'>
                <div className='rateArea__left'>
                    <GoogleAds filterSearchProp={true} />
                </div>
                <div className='rateArea__center'>
                    <MainRateArea />
                </div>
                <div className='rateArea__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default RateArea
