import React from 'react'
import './CreateFoodCheckoutTakeaway.css'
import MainFoodCheckoutTakeaway from '../mainFoodCheckoutTakeaway/MainFoodCheckoutTakeaway'

const CreateFoodCheckoutTakeaway = () => {
    return (
        <div className='createFoodCheckoutTakeaway'>
            <div className='createFoodCheckoutTakeaway__container'>
                <div className='createFoodCheckoutTakeaway__left'>

                </div>
                <div className='createFoodCheckoutTakeaway__center'>
                    <MainFoodCheckoutTakeaway />
                </div>
                <div className='createFoodCheckoutTakeaway__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateFoodCheckoutTakeaway
