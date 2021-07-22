import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefOrderNotifications from '../../components/chefOrderNotifications/ChefOrderNotifications'


const OrderNotifications = () => {
    return (
        <div className='orderNotification'>
            <Header searchProp={true} />
            <ChefOrderNotifications />
            <Footer/>
        </div>
    )
}

export default OrderNotifications
