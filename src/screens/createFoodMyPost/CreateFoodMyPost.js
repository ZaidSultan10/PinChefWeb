import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefFeedFoodAll from '../../components/chefFeedFoodAll/ChefFeedFoodAll'
import ChefFeedFoodAllMyPost from '../../components/chefFeedFoodAllMyPost/ChefFeedFoodAllMyPost'

const CreateFoodMyPost = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <ChefFeedFoodAllMyPost />
            <Footer footerProp={true} />
        </div>
    )
}

export default CreateFoodMyPost
