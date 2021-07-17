import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedRecipeDetails from '../../components/feedRecipeDetails/FeedRecipeDetails'

const UserRecipeDetails = () => {
    return (
        <div className='userRecipeDetails'>
            <Header searchProp={true} />
            <FeedRecipeDetails />
            <Footer />
        </div>
    )
}

export default UserRecipeDetails
