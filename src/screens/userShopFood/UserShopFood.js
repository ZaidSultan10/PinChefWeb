import React from 'react'
import FeedShopFood from '../../components/feedShopFood/FeedShopFood'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const UserShopFood = () => {
    return (
        <div className='userShopFood'>
            <Header searchProp={true} />
            <FeedShopFood shopFoodProp={true} />
            <Footer />
            
        </div>
    )
}

export default UserShopFood
