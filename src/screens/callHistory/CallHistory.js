import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedCallHistory from '../../components/feedCallHistory/FeedCallHistory'



const CallHistory = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedCallHistory />
            <Footer footerProp={true} />
        </div>
    )
}

export default CallHistory
