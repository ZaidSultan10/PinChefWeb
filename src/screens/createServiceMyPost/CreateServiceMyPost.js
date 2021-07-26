import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefFeedFoodAllMyPost from '../../components/chefFeedFoodAllMyPost/ChefFeedFoodAllMyPost'
import ChefFeedFoodAllServiceMyPost from '../../components/chefFeedFoodAllServiceMyPost/ChefFeedFoodAllServiceMyPost'

const CreateServiceMyPost = () => {
    return (
        <div>
            <Header searchProp={true} />
            <ChefFeedFoodAllServiceMyPost />
            <Footer footerProp={true} />
        </div>
    )
}

export default CreateServiceMyPost
