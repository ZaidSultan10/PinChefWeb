import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CreateChefPayments from '../../components/createChefPayments/CreateChefPayments'

const ChefPayments = () => {
    return (
        <div>
            <Header searchProp={true} />
            <CreateChefPayments />
            <Footer />
        </div>
    )
}

export default ChefPayments
