import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedAllChefs from '../../components/feedAllChefs/FeedAllChefs'
import FeedAllChefsChefSide from '../../components/feedAllChefsChefside/FeedAllChefsChefSide'


const UserFollowedChef = () => {
    return (
        <div className='userFollowedChef'>
            <Header searchProp={true} notificationProp={true} />
            <FeedAllChefsChefSide />
            <Footer footerProp={true} />
        </div>
    )
}

export default UserFollowedChef