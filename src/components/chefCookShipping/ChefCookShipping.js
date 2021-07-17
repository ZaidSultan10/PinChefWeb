import React from 'react'
import MainChefCookShip from '../mainChefCookShip/MainChefCookShip'
import './ChefCookShipping.css'

const ChefCookShipping = () => {
    return (
        <div className='chefCookShipping'>
            <div className='chefCookShipping__container'>
                <div className='chefCookShipping__left'>

                </div>
                <div className='chefCookShipping__center'>
                    <MainChefCookShip shipProp={true} />
                </div>
                <div className='chefCookShipping__right'>
                    
                </div>
            </div>
        </div>
    )
}


export default ChefCookShipping
