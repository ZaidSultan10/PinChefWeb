
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SamplePage from '../samplePage/SamplePage'
import './HomeFeed.css'


const HomeFeed = () => {
    return (
        <div className='homefeed'>
            <Header searchProp={true} />
            
            <SamplePage className='homefeed__center' />
            
            <Footer />
        </div>
    )
}





export default HomeFeed;
