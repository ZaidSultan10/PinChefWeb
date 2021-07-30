import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefCookGuestLive from '../../components/chefCookGuestLive/ChefCookGuestLive'

const ChefCookGuest = () => {
    return (
        <div className='chefCookGuest'>
            <Header searchProp={true} notificationProp={true} />
            <ChefCookGuestLive />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefCookGuest
