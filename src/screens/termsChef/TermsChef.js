import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedTermsUser from '../../components/feedTermsUser/FeedTermsUser'


const TermsChef = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedTermsUser />
            <Footer footerProp={true} />
        </div>
    )
}

export default TermsChef
