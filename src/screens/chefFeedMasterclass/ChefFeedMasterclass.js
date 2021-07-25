import React from 'react'
import ChefMasterclassFeedAll from '../../components/chefMasterclassFeedAll/ChefMasterclassFeedAll'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefFeedMasterclass = () => {
    return (
        <div className='chefFeedMasterclass'>
            <Header />
            <ChefMasterclassFeedAll />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefFeedMasterclass
