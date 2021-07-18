import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RateArea from '../../components/rateArea/RateArea'

const RateScreen = () => {
    return (
        <div className='rateScreen'>
            <Header searchProp={true} />
            <RateArea />
            <Footer />
        </div>
    )
}

export default RateScreen
