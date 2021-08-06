import React from 'react'
import ChefCreateFeedService from '../../components/chefCreateFeedService/ChefCreateFeedService'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const ChefCreateService = () => {
    return (
        <div className='chefCreateService'>
            <Header searchProp={true} notificationProp={true} />
            <ChefCreateFeedService />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefCreateService
