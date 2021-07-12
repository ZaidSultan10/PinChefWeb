import React from 'react'
import './ChefFeedMainProfile.css'
import MainChefProfileArea from '../mainChefProfileArea/MainChefProfileArea'

const ChefFeedMainProfile = () => {
    return (
        <div className='chefFeedMainProfile'>
            <div className='chefFeedMainProfile__container'>
                <div className='chefFeedMainProfile__left'>
                    
                </div>
                <div className='chefFeedMainProfile__center'>
                    <MainChefProfileArea />
                </div>
                <div className='chefFeedMainProfile__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefFeedMainProfile
