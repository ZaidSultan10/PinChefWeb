import React from 'react'
import FeedChefProfile from '../../components/feedChefProfile/FeedChefProfile'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const ChefProfileUser = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedChefProfile chefProfileFeedProp={true} />
            <Footer />
        </div>
    )
}

export default ChefProfileUser
