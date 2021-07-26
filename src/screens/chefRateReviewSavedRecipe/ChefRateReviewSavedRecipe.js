import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedChefSavedRecipe from '../../components/feedChefSavedRecipe/FeedChefSavedRecipe'

const ChefRateReviewSavedRecipe = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedChefSavedRecipe />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefRateReviewSavedRecipe
