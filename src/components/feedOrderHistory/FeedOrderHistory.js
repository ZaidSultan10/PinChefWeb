import React from 'react'
import MainOrderHistory from '../mainOrderHistory/MainOrderHistory'
import './FeedOrderHistory.css'


const FeedOrderHistory = () => {
    return (
        <div className='feedOrderHistory'>
            <div className='feedOrderHistory__container'>
                <div className='feedOrderHistory__left'>
                    
                </div>
                <div className='feedOrderHistory__center'>
                    <MainOrderHistory />
                </div>
                <div className='feedOrderHistory__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default FeedOrderHistory
