import React from 'react'
import FeedStarFoodService from '../../components/feedStarFoodService/FeedStarFoodService'
import FeedStarRecipe from '../../components/feedStarRecipe/FeedStarRecipe'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const StarFoodService = ({searchProp}) => {
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