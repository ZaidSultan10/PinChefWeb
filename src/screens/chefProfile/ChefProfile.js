import React from 'react'
import FeedChefProfile from '../../components/feedChefProfile/FeedChefProfile'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefProfile = () => {
    return (
        <div className='chefProfile'>
            <Header searchProp={true} />
            <FeedChefProfile />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefProfile
