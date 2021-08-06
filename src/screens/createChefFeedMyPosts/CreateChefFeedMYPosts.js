import React from 'react'
import ChefHomeFeedAllMyPost from '../../components/chefHomeFeedAllMyPost/ChefHomeFeedAllMyPost'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './CreateChefFeedMyPosts.css'

const CreateChefFeedMYPosts = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <ChefHomeFeedAllMyPost />
            <Footer footerProp={true} />
            
        </div>
    )
}

export default CreateChefFeedMYPosts
