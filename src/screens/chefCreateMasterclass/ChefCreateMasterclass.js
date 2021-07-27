import React from 'react'
import ChefCreateFeedMasterclass from '../../components/chefCreateFeedMasterclass/ChefCreateFeedMasterclass'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefCreateMasterclass = () => {
    return (
        <div className='chefCreateMasterclass'>
            <Header searchProp={true} />
            <ChefCreateFeedMasterclass />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefCreateMasterclass
