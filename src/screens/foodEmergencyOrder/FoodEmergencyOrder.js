import React from 'react'
import Header from '../../components/header/Header'
import CreateFoodEmergencyOrder from '../../components/createFoodEmergencyOrder/CreateFoodEmergencyOrder'
import Footer from '../../components/footer/Footer'

const FoodEmergencyOrder = () => {
    return (
        <div>
            <Header searchProp={true} />
            <CreateFoodEmergencyOrder />
            <Footer />
        </div>
    )
}

export default FoodEmergencyOrder
