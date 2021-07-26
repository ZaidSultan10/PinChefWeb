import { ChevronLeft } from '@material-ui/icons'
import React from 'react'
import paymentDatas from './mainPaymentPolicyData'
import './MainPaymentPolicy.css'


const MainPaymentPolicy = () => {
    return (
        <div className='mainPaymentPolicy'>
            {paymentDatas.map((paymentData) => (
                <div className='mainPaymentPolicy__container'>
                    <div className='mainPaymentPolicy__heading'>
                        <ChevronLeft />
                        <h5>{paymentData.heading}</h5>
                    </div>
                    <div className='mainPaymentPolicy__description'>
                        <p>{paymentData.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainPaymentPolicy
