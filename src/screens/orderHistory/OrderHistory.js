import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedOrderHistory from '../../components/feedOrderHistory/FeedOrderHistory'

const OrderHistory = () => {
    return (
        <div className='orderHistory'>
            <Header searchProp={true} notificationProp={true} />
            <FeedOrderHistory />
            <Footer footerProp={true} />
        </div>
    )
}

export default OrderHistory
