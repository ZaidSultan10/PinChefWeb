import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedOrderDetails from '../../components/feedOrderDetails/FeedOrderDetails'

const OrderDetails = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <FeedOrderDetails />
            <Footer footerProp={true} />
        </div>
    )
}

export default OrderDetails
