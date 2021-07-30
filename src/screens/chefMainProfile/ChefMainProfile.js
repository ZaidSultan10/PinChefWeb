import React from 'react'
import ChefFeedMainProfile from '../../components/chefFeedMainProfile/ChefFeedMainProfile'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefMainProfile = () => {
    return (
        <div className='chefMainProfile'>
            <Header searchProp={true} notificationProp={true} />
            <ChefFeedMainProfile />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefMainProfile 