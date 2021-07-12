import React from 'react'
import ChefCookTakeaway from '../../components/chefCookTakeaway/ChefCookTakeaway'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefCookTakeout = () => {
    return (
        <div className='chefCookTakeout'>
            <Header searchProp={true} />
            <ChefCookTakeaway/>
            <Footer />
        </div>
    )
}

export default ChefCookTakeout
