import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefFeedMainProfileDetails from '../../components/chefFeedMainProfileDetails/ChefFeedMainProfileDetails'


const ChefProfileDetails = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <ChefFeedMainProfileDetails />
            <Footer footerProp={true} />
        
        </div>
    )
}

export default ChefProfileDetails
