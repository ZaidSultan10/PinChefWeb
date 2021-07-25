import React from 'react'
import ChefFeedSettings from '../../components/chefFeedSettings/ChefFeedSettings'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefSettings = () => {
    return (
        <div className='chefSettings'>
            <Header searchProp={true} />
            <ChefFeedSettings />
            <Footer footerProp={true}/>
        </div>
    )
}

export default ChefSettings
