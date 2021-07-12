import React from 'react'
import MainChefCookGuest from '../mainChefCookGuest/MainChefCookGuest'
import './ChefCookGuestLive.css'
const ChefCookGuestLive = () => {
    return (
        <div className='chefCookGuestLive'>
            <div className='chefCookGuestLive__container'>
                <div className='chefCookGuestLive__left'>

                </div>
                <div className='chefCookGuestLive__center'>
                    <MainChefCookGuest />
                </div>
                <div className='chefCookGuestLive__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefCookGuestLive
