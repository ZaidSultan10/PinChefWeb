import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import RateArea from '../../components/rateArea/RateArea'


const ChefRateArea = () => {
    return (
        <div>
            <Header searchProp={true} />
            <RateArea rateAreaProp={true} />
            <Footer footerProp={true} />  
        </div>
    )
}

export default ChefRateArea
