import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefCookDeliveryCheckout from '../../components/chefCookDeliveryCehckout/ChefCookDeliveryCheckout'


const ChefCookDelivery = () => {
    return (
        <div className='chefCookDelivery'>
            <Header searchProp={true} />
            <ChefCookDeliveryCheckout />
            <Footer />
        </div>
    )
}

export default ChefCookDelivery
