import React from 'react'
import ChefCreateFeedService from '../../components/chefCreateFeedService/ChefCreateFeedService'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ChefFeedService from '../chefFeedService/ChefFeedService'

const ChefCreateService = () => {
    return (
        <div className='chefCreateService'>
            <Header searchProp={true} />
            <ChefCreateFeedService />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefCreateService
