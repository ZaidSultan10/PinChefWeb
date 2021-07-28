import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedAllChefs from '../../components/feedAllChefs/FeedAllChefs'


const UserFollowedChefs = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedAllChefs  />
            <Footer />
            
        </div>
    )
}

export default UserFollowedChefs
