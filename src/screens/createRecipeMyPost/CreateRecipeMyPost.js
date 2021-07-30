import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefRecipeFeedAllMyPost from '../../components/chefRecipeFeedAllMyPost/ChefRecipeFeedAllMyPost'


const CreateRecipeMyPost = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <ChefRecipeFeedAllMyPost />
            <Footer footerProp={true} />
        </div>
    )
}

export default CreateRecipeMyPost
