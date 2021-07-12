import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefFeedSubscription from '../../components/chefFeedSubscription/ChefFeedSubscription'


const ChefAccountSubscription = () => {
    return (
        <div className='chefAccountSubscription'>
            <Header />
            <ChefFeedSubscription />
            <Footer />
        </div>
    )
}

export default ChefAccountSubscription
