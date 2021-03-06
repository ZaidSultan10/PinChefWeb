import React from 'react'
import FeedSettings from '../../components/feedSettings/FeedSettings'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Settings = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedSettings />
            <Footer />
        </div>
    )
}

export default Settings
