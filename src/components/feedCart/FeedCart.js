import React from 'react'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainCart from '../mainCart/MainCart'
import './FeedCart.css'

const FeedCart = () => {
    return (
        <div className='feedCart'>
            <div className='feedCart__container'>
                <div className='feedCart__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='feedCart__center'>
                    <MainCart />
                </div>
                <div className='feedCart__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default FeedCart
