import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedChefSavedPosts from '../../components/feedChefSavedPosts/FeedChefSavedPosts'


const ChefRateReviewSaved = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedChefSavedPosts />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefRateReviewSaved
