import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefCreateMasterclassCheckout from '../../components/chefCreateMasterclassCheckout/ChefCreateMasterclassCheckout'

const ChefMasterclassCheckout = () => {
    return (
        <div className='chefMasterclassCheckout'>
            <Header searchProp={true} notificationProp={true} />
            <ChefCreateMasterclassCheckout />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefMasterclassCheckout
