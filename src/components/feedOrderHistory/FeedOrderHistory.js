import React from 'react'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import MainOrderHistory from '../mainOrderHistory/MainOrderHistory'
import MainFeedFilters from '../mainFeedFilters/MainFeedFilters'
import './FeedOrderHistory.css'


const FeedOrderHistory = () => {
    return (
        <div className='feedOrderHistory'>
            <div className='feedOrderHistory__container'>
                <div className='feedOrderHistory__left'>
                    
                </div>
                <div className='feedOrderHistory__center'>
                    <div className='feedOrderHistory__heading'>
                        <h5>ORDERS HISTORY</h5>
                    </div>
                    <ChefMainFilters chefFilterProp={true} />
                    <MainFeedFilters mainFilterProp={true} />
                    <MainOrderHistory />
                </div>
                <div className='feedOrderHistory__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default FeedOrderHistory
