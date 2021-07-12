import React from 'react'
import FeedMyPurchases from '../../components/feedMyPurchases/FeedMyPurchases'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const UserMyPurchases = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedMyPurchases />
            <Footer />
            
        </div>
    )
}

export default UserMyPurchases
