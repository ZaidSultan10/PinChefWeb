import React from 'react'
import MainChefPaymentMethods from '../mainChefPaymentMethods/MainChefPaymentMethods'
import './CreateChefPaymentMethods.css'


const CreateChefPaymentMethods = () => {
    return (
        <div className='createChefPaymentMethods'>
            <div className='createChefPaymentMethods__container'>
                <div className='createChefPaymentMethods__left'>

                </div>
                <div className='createChefPaymentMethods__center'>
                    <MainChefPaymentMethods />
                </div>
                <div className='createChefPaymentMethods__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateChefPaymentMethods
