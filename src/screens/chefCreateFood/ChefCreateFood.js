import React from 'react'
import ChefFeedFoodAll from '../../components/chefFeedFoodAll/ChefFeedFoodAll'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefCreateFood = () => {
    return (
        <div className='chefCreateFood'>
            <Header searchProp={true} />
            <ChefFeedFoodAll />
            <Footer />
        </div>
    )
}

export default ChefCreateFood
