import React from 'react'
import './RateReviewForm.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CreateRateReviewForm from '../../components/createRateReviewForm/CreateRateReviewForm'


const RateReviewForm = () => {
    return (
        <div className='rateReviewForm'>
            <Header searchProp={true} />
            <CreateRateReviewForm />
            <Footer />
        </div>
    )
}

export default RateReviewForm
