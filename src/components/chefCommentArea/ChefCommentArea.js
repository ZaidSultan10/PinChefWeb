import React from 'react'
import ChefAds from '../chefAds/ChefAds'
import Ads from '../ads/Ads'
import './ChefCommentArea.css'
import MainCommentArea from '../mainCommentArea/MainCommentArea'


const ChefCommentArea = () => {
    return (
        <div className='chefCommentArea'>
            <div className='chefCommentArea__container'>
                <div className='chefCommentArea__left'>
                    <Ads />
                    <Ads />
                    <Ads />

                </div>
                <div className='chefCommentArea__center'>
                    <MainCommentArea />
                </div>
                <div className='chefCommentArea__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefCommentArea
