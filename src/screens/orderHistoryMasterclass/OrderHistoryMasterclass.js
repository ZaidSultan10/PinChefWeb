import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedOrderHistory from '../../components/feedOrderHistory/FeedOrderHistory'


const OrderHistoryMasterclass = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <FeedOrderHistory feedMasterclassInfoLink={true} />
            <Footer footerProp={true} />
        </div>
    )
}

export default OrderHistoryMasterclass
