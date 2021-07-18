import React from 'react'
import './CreateRateReviewForm.css'
import MainRateReviewForm from '../mainRateReviewForm/MainRateReviewForm'

const CreateRateReviewForm = () => {
    return (
        <div className='createRateReviewForm'>
            <div className='createRateReviewForm__container'>
                <div className='createRateReviewForm__left'>
                    
                </div>
                <div className='createRateReviewForm__center'>
                    <MainRateReviewForm />
                </div>
                <div className='createRateReviewForm__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateRateReviewForm
