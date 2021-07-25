import React from 'react'
import ChefFeedFoodAll from '../../components/chefFeedFoodAll/ChefFeedFoodAll'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefFeedService = () => {
    return (
        <div className='chefFeedService'>
            <Header />
            <ChefFeedFoodAll />
            <Footer footerProp={true}/>
        </div>
    )
}

export default ChefFeedService
