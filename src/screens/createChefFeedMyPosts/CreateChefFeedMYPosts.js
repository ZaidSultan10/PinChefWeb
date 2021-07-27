import React from 'react'
import ChefHomeFeedAll from '../../components/chefHomeFeedAll.js/ChefHomeFeedAll'
import ChefHomeFeedAllMyPost from '../../components/chefHomeFeedAllMyPost/ChefHomeFeedAllMyPost'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './CreateChefFeedMyPosts.css'

const CreateChefFeedMYPosts = () => {
    return (
        <div>
            <Header searchProp={true} />
            <ChefHomeFeedAllMyPost />
            <Footer footerProp={true} />
            
        </div>
    )
}

export default CreateChefFeedMYPosts
