import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RateArea from '../../components/rateArea/RateArea'

const RateScreen = () => {
    return (
        <div className='rateScreen'>
            <Header searchProp={true} notificationProp={true} />
            <RateArea />
            <Footer footerProp={true} />
        </div>
    )
}

export default RateScreen
