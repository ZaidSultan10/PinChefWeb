import React from 'react'
import FeedStar from '../../components/feedStar/FeedStar'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const StarHomeFeed = ({searchProp}) => {
    return (
        <div className='homefeed'>
            <Header searchProp={true} />
            <FeedStar/>
            <div className='homeFeed__footer'>
                <Footer />
            </div>
        </div>
    )
}

export default StarHomeFeed