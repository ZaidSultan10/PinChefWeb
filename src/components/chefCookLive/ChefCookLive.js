import React from 'react'
import MainCookLivePayment from '../mainCookLivePayment/MainCookLivePayment'
import './ChefCookLive.css'

const ChefCookLive = () => {
    return (
        <div className='chefCookLive'>
            <div className='chefCookLive__container'>
                <div className='chefCookLive__left'>

                </div>
                <div className='chefCookLive__center'>
                    <MainCookLivePayment />
                </div>
                <div className='chefCookLive__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefCookLive
