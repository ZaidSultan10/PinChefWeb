import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedMyPurchases from '../../components/feedMyPurchases/FeedMyPurchases'

const ChefOrderHistoryMyPurchases = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <FeedMyPurchases myPurchasesProp={true} />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefOrderHistoryMyPurchases
