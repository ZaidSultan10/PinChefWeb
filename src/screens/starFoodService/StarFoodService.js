import React from 'react'
import FeedStarFoodService from '../../components/feedStarFoodService/FeedStarFoodService'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const StarFoodService = () => {
    return (
        <div className='homefeed'>
            <Header searchProp={true} />
            <FeedStarFoodService />
            <div className='homeFeed__footer'>
                <Footer />
            </div>
        </div>
    )
}

export default StarFoodService