import React from 'react'
import MainChefCookTakeout from '../mainChefCookTakeout/MainChefCookTakeout'
import './ChefCookTakeaway.css'

const ChefCookTakeaway = () => {
    return (
        <div className='chefCookTakeaway'>
            <div className='chefCookTakeaway__container'>
                <div className='chefCookTakeaway__left'>

                </div>
                <div className='chefCookTakeaway__center'>
                    <MainChefCookTakeout/>
                </div>
                <div className='chefCookTakeaway__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefCookTakeaway
