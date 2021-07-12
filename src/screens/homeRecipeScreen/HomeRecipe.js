import React from 'react'
import './HomeRecipe.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedRecipe from '../../components/feedRecipe/FeedRecipe'

const HomeRecipe = () => {
    return (
        <div className='homeRecipe'>
            <Header searchProp={true} />
            <FeedRecipe />
            <Footer />
        </div>
    )
}

export default HomeRecipe
