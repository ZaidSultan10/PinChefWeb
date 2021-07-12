import React from 'react'
import MainChefCreateRecipe from '../mainChefCreateRecipe/MainChefCreateRecipe'
import './ChefCreateFeedRecipe.css'

const ChefCreateFeedRecipe = () => {
    return (
        <div className='chefCreateFeedRecipe'>
            <div className='chefCreateFeedRecipe__container'>
                <div className='chefCreateFeedRecipe__left'>
                    
                </div>
                <div className='chefCreateFeedRecipe__center'>
                    <MainChefCreateRecipe />
                </div>
                <div className='chefCreateFeedRecipe__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefCreateFeedRecipe
