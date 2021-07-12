import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefCookShipping from '../../components/chefCookShipping/ChefCookShipping'


const ChefCookShip = () => {
    return (
        <div className='chefCookShip'>
            <Header searchProp={true} />
            <ChefCookShipping/>
            <Footer />
        </div>
    )
}

export default ChefCookShip
