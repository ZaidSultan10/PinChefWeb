import React from 'react'
import MainChefCreatePost from '../mainChefCreatePost/MainChefCreatePost'
import './ChefCreateFeedPost.css'

const ChefCreateFeedPost = () => {
    return (
        <div className='chefCreateFeedPost'>
            <div className='chefCreateFeedPost__container'>
                <div className='chefCreateFeedPost__left'>

                </div>
                <div className='chefCreateFeedPost__center'>
                    <MainChefCreatePost />
                </div>
                <div className='chefCreateFeedPost__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default ChefCreateFeedPost
