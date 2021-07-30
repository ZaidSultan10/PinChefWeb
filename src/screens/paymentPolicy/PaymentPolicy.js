import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedPaymentPolicy from '../../components/feedPaymentPolicy/FeedPaymentPolicy'

const PaymentPolicy = () => {
    return (
        <div>
            <Header searchProp={true } notificationProp={true} />
            <FeedPaymentPolicy />
            <Footer footerProp={true} />
            
        </div>
    )
}

export default PaymentPolicy
