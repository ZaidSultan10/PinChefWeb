import React from 'react'
import MainOrderDetails from '../mainOrderDetails/MainOrderDetails'
import './FeedOrderDetails.css'


const FeedOrderDetails = () => {
    return (
        <div className='feedOrderDetails'>
            <div className='feedOrderDetails__container'>
                <div className='feedOrderDetails__left'>
                    
                </div>
                <div className='feedOrderDetails__center'>
                    <MainOrderDetails />
                </div>
                <div className='feedOrderDetails__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default FeedOrderDetails
