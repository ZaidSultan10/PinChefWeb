import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedChefSavedChefs from '../../components/feedChefSavedChefs/FeedChefSavedChefs'

const ChefRateReviewSavedChefs = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedChefSavedChefs />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefRateReviewSavedChefs
