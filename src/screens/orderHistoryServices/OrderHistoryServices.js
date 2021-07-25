import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedOrderHistory from '../../components/feedOrderHistory/FeedOrderHistory'


const OrderHistoryServices = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedOrderHistory />
            <Footer footerProp={true} />
        </div>
    )
}

export default OrderHistoryServices
