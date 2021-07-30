import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefFeedSubscription from '../../components/chefFeedSubscription/ChefFeedSubscription'


const ChefAccountSubscription = () => {
    return (
        <div className='chefAccountSubscription'>
            <Header searchProp={true} notificationProp={true} />
            <ChefFeedSubscription />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefAccountSubscription
