import React from 'react'
import MainChefCookDelivery from '../mainChefCookDelivery/MainChefCookDelivery'
import './ChefCookDeliveryCheckout.css'

const ChefCookDeliveryCheckout = () => {
    return (
        <div className='chefCookDeliveryCheckout'>
            <div className='chefCookDeliveryCheckout__container'>
                <div className='chefCookDeliveryCheckout__left'>

                </div>
                <div className='chefCookDeliveryCheckout__center'>
                    <MainChefCookDelivery />
                </div>
                <div className='chefCookDeliveryCheckout__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefCookDeliveryCheckout
