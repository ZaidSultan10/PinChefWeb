import React from 'react'
import ChefFeedFoodAll from '../../components/chefFeedFoodAll/ChefFeedFoodAll'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ChefFeedFoodAllService from '../../components/chefFeedFoodAllService/ChefFeedFoodAllService'


const ChefFeedService = () => {
    return (
        <div className='chefFeedService'>
            <Header searchProp={true} notificationProp={true} />
            <ChefFeedFoodAllService cart1Prop={true} />
            <Footer footerProp={true}/>
        </div>
    )
}

export default ChefFeedService
