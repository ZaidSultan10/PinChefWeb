import React from 'react'
import ChefCreateFeedFood from '../../components/chefCreateFeedFood/ChefCreateFeedFood'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefCreateFoodPost = () => {
    return (
        <div className='chefCreateFoodPost'>
            <Header />
            <ChefCreateFeedFood />
            <Footer />
        </div>
    )
}

export default ChefCreateFoodPost
