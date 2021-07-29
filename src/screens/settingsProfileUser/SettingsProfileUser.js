import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedSettingsProfile from '../../components/feedSettingsProfile/FeedSettingsProfile'

const SettingsProfileUser = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedSettingsProfile />
            <Footer />
            
        </div>
    )
}

export default SettingsProfileUser
