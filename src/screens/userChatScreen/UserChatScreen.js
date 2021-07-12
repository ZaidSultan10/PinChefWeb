import React from 'react'
import FeedChats from '../../components/feedChats/FeedChats'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const UserChatScreen = () => {
    return (
        <div className='userChatScreen'>
            <Header searchProp={true} />
            <FeedChats />
            <Footer />
        </div>
    )
}

export default UserChatScreen
