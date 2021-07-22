import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CreateContactUs from '../../components/createContactUs/CreateContactUs'


const ContactUs = () => {
    return (
        <div>
            <Header searchProp={true} />
            <CreateContactUs />
            <Footer />
        </div>
    )
}

export default ContactUs
