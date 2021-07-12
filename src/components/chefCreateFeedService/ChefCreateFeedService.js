import React from 'react'
import MainChefCreateService from '../mainChefCreateService/MainChefCreateService'
import './ChefCreateFeedService.css'

const ChefCreateFeedService = () => {
    return (
        <div className='chefCreateFeedService'>
            <div className='chefCreateFeedService__container'>
                <div className='chefCreateFeedService__left'>

                </div>
                <div className='chefCreateFeedService__center'>
                    <MainChefCreateService />
                </div>
                <div className='chefCreateFeedService__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefCreateFeedService
