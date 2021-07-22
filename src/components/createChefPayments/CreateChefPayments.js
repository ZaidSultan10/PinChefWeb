import React from 'react'
import MainChefPayments from '../mainChefPayments/MainChefPayments'
import './CreateChefPayments.css'


const CreateChefPayments = () => {
    return (
        <div className='createChefPayments'>
            <div className='createChefPayments__container'>
                <div className='createChefPayments__left'>

                </div>
                <div className='createChefPayments__center'>
                    <MainChefPayments />
                </div>
                <div className='createChefPayments__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateChefPayments
