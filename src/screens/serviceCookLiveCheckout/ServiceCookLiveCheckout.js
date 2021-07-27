import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefCookLive from '../../components/chefCookLive/ChefCookLive'

const ServiceCookLiveCheckout = () => {
    return (
        <div className='serviceCookLiveCheckout'>
            <Header searchProp={true} />
            <ChefCookLive />
            <Footer footerProp={true} />
        </div>
    )
}

export default ServiceCookLiveCheckout
