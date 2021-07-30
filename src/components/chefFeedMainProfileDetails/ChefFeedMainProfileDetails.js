import React from 'react'
import MainChefProfileAreaDetails from '../mainChefProfileAreaDetails/MainChefProfileAreaDetails'
import './ChefFeedMainProfileDetails.css'

const ChefFeedMainProfileDetails = () => {
    return (
        <div className='chefFeedMainProfileDeatails'>
            <div className='chefFeedMainProfileDeatails__container'>
                <div className='chefFeedMainProfileDeatails__left'>
                    
                </div>
                <div className='chefFeedMainProfileDeatails__center'>
                    <MainChefProfileAreaDetails />
                </div>
                <div className='chefFeedMainProfileDeatails__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefFeedMainProfileDetails
