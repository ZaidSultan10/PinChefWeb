import React from 'react'
import FeedStarRecipe from '../../components/feedStarRecipe/FeedStarRecipe'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const StarFeedRecipe = () => {
    return (
        <div className='homefeed'>
            <Header searchProp={true} />
            <FeedStarRecipe/>
            <div className='homeFeed__footer'>
                <Footer />
            </div>
        </div>
    )
}

export default StarFeedRecipe