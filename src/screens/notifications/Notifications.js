import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedNotifications from '../../components/feedNotifications/FeedNotifications'


const Notifications = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <FeedNotifications />
            <Footer footerProp={true} />
        </div>
    )
}

export default Notifications
