import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedOrderHistory from '../../components/feedOrderHistory/FeedOrderHistory'

const OrderHistory = () => {
    return (
        <div className='orderHistory'>
            <Header searchProp={true} />
            <FeedOrderHistory />
            <Footer />
        </div>
    )
}

export default OrderHistory
