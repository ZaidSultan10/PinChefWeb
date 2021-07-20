import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedMyChat from '../../components/feedMyChat/FeedMyChat'

const MyChatScreen = () => {
    return (
        <div className='myChatScreen'>
            <Header searchProp={true} />
            <FeedMyChat />
            <Footer />
        </div>
    )
}

export default MyChatScreen
