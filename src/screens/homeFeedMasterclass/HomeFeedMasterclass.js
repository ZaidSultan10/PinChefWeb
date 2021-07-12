import React from 'react'
import FeedMasterclass from '../../components/feedMasterclass/FeedMasterclass'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './homeFeedMasterclass.css'

const HomeFeedMasterclass = () => {
    return (
        <div className='masterClass'>
            <Header searchProp={true} />
            <FeedMasterclass />
            <Footer />
        </div>
    )
}

export default HomeFeedMasterclass
