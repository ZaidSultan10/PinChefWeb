import React from 'react'
import ChefCookTakeaway from '../../components/chefCookTakeaway/ChefCookTakeaway'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefCookTakeout = () => {
    return (
        <div className='chefCookTakeout'>
            <Header searchProp={true} notificationProp={true} />
            <ChefCookTakeaway/>
            <Footer searchProp={true} />
        </div>
    )
}

export default ChefCookTakeout
