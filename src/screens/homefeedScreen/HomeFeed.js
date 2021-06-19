import React from 'react'
import Feed from '../../components/feed/Feed'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './HomeFeed.css'

const HomeFeed = ({searchProp}) => {
    return (
        <div className='homefeed'>
            <Header searchProp={true} />
            <Feed />
            <div className='homeFeed__footer'>
                <Footer />
            </div>
        </div>
    )
}


export default HomeFeed;
