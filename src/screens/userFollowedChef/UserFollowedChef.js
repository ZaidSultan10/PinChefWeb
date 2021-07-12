import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedAllChefs from '../../components/feedAllChefs/FeedAllChefs'

const UserFollowedChef = () => {
    return (
        <div className='userFollowedChef'>
            <Header />
            <FeedAllChefs />
            <Footer />
        </div>
    )
}

export default UserFollowedChef