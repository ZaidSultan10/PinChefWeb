import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefFeedFoodAll from '../../components/chefFeedFoodAll/ChefFeedFoodAll'

const CreateFoodMyPost = () => {
    return (
        <div>
            <Header searchProp={true} />
            <ChefFeedFoodAll myfoodProp={true} />
            <Footer />
        </div>
    )
}

export default CreateFoodMyPost
