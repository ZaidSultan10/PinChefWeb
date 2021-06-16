import React from 'react'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import './HomeFeed.css'

const HomeFeed = () => {
    return (
        <div className='homefeed'>
            <Header />
            <Feed />
        </div>
    )
}

export default HomeFeed
