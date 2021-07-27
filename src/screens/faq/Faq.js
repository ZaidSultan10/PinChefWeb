import React from 'react'
import FeedFaq from '../../components/feedFaq/FeedFaq'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const Faq = () => {
    return (
        <div className='faq'>
            <Header searchProp={true} />
            <FeedFaq />
            <Footer />
        </div>
    )
}

export default Faq
