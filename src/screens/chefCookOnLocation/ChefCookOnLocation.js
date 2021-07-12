import React from 'react'
import ChefCookGuestLive from '../../components/chefCookGuestLive/ChefCookGuestLive'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const chefCookOnLocation = () => {
    return (
        <div className='chefCookLocation'>
            <Header searchProp={true } />
            <ChefCookGuestLive />
            <Footer />
        </div>
    )
}

export default chefCookOnLocation
