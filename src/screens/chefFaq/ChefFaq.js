import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedFaqChef from '../../components/feedFaqChef/FeedFaqChef'


const ChefFaq = () => {
    return (
        <div >
            <Header searchProp={true} notificationProp={true} />
            <FeedFaqChef />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefFaq
