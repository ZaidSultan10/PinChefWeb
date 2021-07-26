import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedChefSavedFoodService from '../../components/feedChefSavedFoodService/FeedChefSavedFoodService'



const ChefRateReviewFoodService = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedChefSavedFoodService />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefRateReviewFoodService
