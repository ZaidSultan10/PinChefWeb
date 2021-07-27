import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedTermsUser from '../../components/feedTermsUser/FeedTermsUser'

const TermsUser = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedTermsUser />
            <Footer />
        </div>
    )
}

export default TermsUser
