import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedSettingsProfile from '../../components/feedSettingsProfile/FeedSettingsProfile'

const SettingsProfile = () => {
    return (
        <div className='settingsProfile'>
            <Header searchProp={true} notificationProp={true} />
            <FeedSettingsProfile feedProfileConditionPRop={true} />
            <Footer footerProp={true} />
        </div>
    )
}

export default SettingsProfile
