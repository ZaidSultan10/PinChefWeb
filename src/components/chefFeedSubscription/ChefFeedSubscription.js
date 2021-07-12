import React from 'react'
import MainChefSubscription from '../mainChefSubscription/MainChefSubscription'
import './ChefFeedSubscription.css'

const ChefFeedSubscription = () => {
    return (
        <div className='chefFeedSubscription'>
            <div className='chefFeedSubscription__container'>
                <div className='chefFeedSubscription__left'>

                </div>
                <div className='chefFeedSubscription__center'>
                    <MainChefSubscription />
                </div>
                <div className='chefFeedSubscription__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefFeedSubscription
