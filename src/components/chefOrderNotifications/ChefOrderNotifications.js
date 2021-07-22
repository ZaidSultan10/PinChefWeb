import React from 'react'
import MainOrderNotifications from '../mainOrderNotifications/MainOrderNotifications'
import './ChefOrderNotifications.css'

const ChefOrderNotifications = () => {
    return (
        <div className='chefOrderNotifications'>
            <div className='chefOrderNotifications__container'>
                <div className='chefOrderNotifications__left'>
                    
                </div>
                <div className='chefOrderNotifications__center'>
                    <MainOrderNotifications />
                </div>
                <div className='chefOrderNotifications__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefOrderNotifications
