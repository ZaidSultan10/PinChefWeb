import React from 'react'
import ChefHomeFeedAll from '../../components/chefHomeFeedAll.js/ChefHomeFeedAll'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './CreateChefFeedMyPosts.css'

const CreateChefFeedMYPosts = () => {
    return (
        <div>
            <Header searchProp={true} />
            <ChefHomeFeedAll mypostProp={true} />
            <Footer />
            
        </div>
    )
}

export default CreateChefFeedMYPosts
