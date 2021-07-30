import React from 'react'
import CreateChefPaymentMethods from '../../components/createChefPaymentMethods/CreateChefPaymentMethods'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


const ChefPaymentMethods = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <CreateChefPaymentMethods />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefPaymentMethods
