import React from 'react'
import ChefHomeFeedAll from '../../components/chefHomeFeedAll.js/ChefHomeFeedAll'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefFeedAll = () => {
    return (
        <div className='chefFeedAll'>
            <Header searchProp={true} notificationProp={true} />
            <ChefHomeFeedAll />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefFeedAll
