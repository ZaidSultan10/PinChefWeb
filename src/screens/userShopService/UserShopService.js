import React from 'react'
import FeedShopFood from '../../components/feedShopFood/FeedShopFood'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const UserShopService = () => {
    return (
        <div className='userShopFood'>
            <Header searchProp={true} />
            <FeedShopFood />
            <Footer />
            
        </div>
    )
}

export default UserShopService