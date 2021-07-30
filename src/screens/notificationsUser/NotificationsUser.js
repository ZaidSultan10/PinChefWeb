import React from 'react'
import FeedNotificationsUser from '../../components/feedNotificationsUser/FeedNotificationsUser'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const NotificationsUser = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedNotificationsUser />
            <Footer />
        </div>
    )
}

export default NotificationsUser
